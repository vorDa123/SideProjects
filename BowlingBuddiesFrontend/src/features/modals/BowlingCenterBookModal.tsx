import BookModalForm from "./BookModalForm.tsx";
import BookModalHeader from "./BookModalHeader.tsx";
import BookModalFooter from "./BookModalFooter.tsx";
import BookModalPlayers from "./BookModalPlayers.tsx";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { ModalProps } from "../../types/index.ts";

function BowlingCenterBookingModal(props: ModalProps) {
  const handleCloseModal = (e: React.MouseEvent<Element>) => {
    e.stopPropagation();
    if (!props.onClose) return;
    props.onClose();
  };

  const closeModal = () => {
  props.onClose?.();
};

  useEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [props.isOpen]);

  if (!props.isOpen) return null;
  return createPortal(
    <>
      <div
        className="z-50 bg-darkerBlue-60 h-dvh w-dvw fixed inset-0 touch-none"
        onClick={handleCloseModal}
      ></div>
      <div className="bg-white-100 mx-auto my-5 px-6 py-7 w-9/10 h-[95dvh] fixed bottom-0 left-0 right-0 z-60 rounded-m30 md:w-8/10 lg:w-6/10 xl:w-5/10 xxl:w-4/10 md:py-5 xl:py-5 mxl:py-10 xxl:py-5">
        <div className="overflow-y-auto h-full">
          <div className="grid grid-cols-8 gap-x-4 auto-rows-max">
            <BookModalHeader onClose={closeModal}/>
            <BookModalForm />
            <BookModalPlayers onClose={closeModal} onAddPlayer={props.onAddPlayer}/>
            <BookModalFooter />
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
}

export default BowlingCenterBookingModal;
