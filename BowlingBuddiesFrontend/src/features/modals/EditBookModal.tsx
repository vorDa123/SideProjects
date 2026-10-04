import BookModalForm from "./BookModalForm.tsx";
import BookModalHeader from "./BookModalHeader.tsx";
import EditBookModalFooter from "./EditBookingModalFooter.tsx";
import BookModalPlayers from "./BookModalPlayers.tsx";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { ModalProps } from "../../types/index.ts";
import { BookingFormContext } from "../../context/BookFormContext.ts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function EditBookingModal(props: ModalProps) {
  const isJoinClicked = props.isJoinClicked ?? false;
  const currentHeight = isJoinClicked ? "95dvh" : "80dvh";
  const modalRef = useRef<HTMLDivElement>(null);
  const handleCloseModal = (e: React.MouseEvent<Element>) => {
    e.stopPropagation();
    handleCloseAnimation();
  };

  const closeModal = () => {
    handleCloseAnimation();
  };

  const toggleJoinClicked = () => {
    props.setIsJoinClicked?.();
  };
  const handleCloseAnimation = () => {
    if (!modalRef.current) {
      props.onClose?.();
      return;
    }
    gsap.to(modalRef.current, {
      y: -300,
      opacity: 0,
      onComplete: () => {
        props.onClose?.();
      },
    });
  };

  useGSAP(
    () => {
      if (!modalRef.current) return;
      gsap.fromTo(
        modalRef.current,
        { y: -300, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
      );
    },
    { dependencies: [props.isOpen] },
  );

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
      <div
        ref={modalRef}
        style={{ height: currentHeight }}
        className="bg-white-100 mx-auto my-5 px-6 py-7 w-9/10 fixed top-0 left-0 right-0 z-60 rounded-m30 md:w-8/10 lg:w-6/10 xl:w-5/10 xxl:w-4/10 md:py-5 xl:py-5 mxl:py-10 xxl:py-5"
      >
        <div className="overflow-y-auto h-full">
          <div className="grid grid-cols-8 gap-x-4 auto-rows-max">
            <BookModalHeader
              onClose={closeModal}
              myReservationData={props.myReservationData}
            />
            <BookingFormContext value={{ isJoinClicked, toggleJoinClicked }}>
              <BookModalForm myReservationData={props.myReservationData} />
              {isJoinClicked && (
                <BookModalPlayers
                  onClose={closeModal}
                  onAddPlayer={props.onAddPlayer}
                  myReservationData={props.myReservationData}
                />
              )}
            </BookingFormContext>
            <EditBookModalFooter
              onClose={closeModal}
              myReservationData={props.myReservationData}
            />
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
}

export default EditBookingModal;
