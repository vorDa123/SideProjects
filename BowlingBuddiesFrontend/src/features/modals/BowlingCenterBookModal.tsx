import BookModalForm from "./BookModalForm.tsx";
import BookModalHeader from "./BookModalHeader.tsx";
import BookModalFooter from "./BookModalFooter.tsx";
import BookModalPlayers from "./BookModalPlayers.tsx";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { ModalProps } from "../../types/index.ts";
import { BookingFormContext } from "../../context/BookFormContext.ts";
import { useBooking } from "../../hooks/useBooking.tsx";
import type { FormEvent } from "react";

function BowlingCenterBookingModal(props: ModalProps) {
  const { createReservation } = useBooking();
  const isJoinClicked = props.isJoinClicked!;
  const currentHeight = isJoinClicked ? "95dvh" : "80dvh";
  const handleCloseModal = (e: React.MouseEvent<Element>) => {
    e.stopPropagation();
    if (!props.onClose) return;
    props.onClose();
  };

  const closeModal = () => {
    props.onClose?.();
  };

  const toggleJoinClicked = () => {
    props.setIsJoinClicked?.();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log("e currenttarget", e.currentTarget);
    console.log("Form data:", formData);
    console.log("Svi podaci iz forme:", data);
    const reservationData = {
      bowlingCenterInfo: props.newReservationData?.centerData || props.freeSlotData?.bowlingCenterData,
      startTime: `${data.time}`,
      date: props.newReservationData?.date || props.freeSlotData?.date,
      shoesNeeded: data.shoesNeeded ? true : false,
      openJoin: data.openJoin ? true : false,
      duration: Number(data.duration),
      numberOfPlayers: Number(data.players),
      email: `${data.email}`,
      phone: `${data.phone}`,
      reservationType: `${data.resType}`,
    };
    createReservation(reservationData);
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
      <div
        style={{ height: currentHeight }}
        className="bg-white-100 mx-auto my-5 px-6 py-7 w-9/10 fixed top-0 left-0 right-0 z-60 rounded-m30 md:w-8/10 lg:w-6/10 xl:w-5/10 xxl:w-4/10 md:py-5 xl:py-5 mxl:py-10 xxl:py-5 transition-all duration-300"
      >
        <div className="overflow-y-auto h-full">
          <div className="grid grid-cols-8 gap-x-4 auto-rows-max">
            <BookModalHeader
              onClose={closeModal}
              freeSlotData={props.freeSlotData}
              newReservationData={props.newReservationData}
            />
            <form
              onSubmit={handleSubmit}
              className="col-span-8 grid grid-cols-8 gap-x-4 auto-rows-max"
            >
              <BookingFormContext value={{ isJoinClicked, toggleJoinClicked }}>
                <BookModalForm
                  freeSlotData={props.freeSlotData}
                  newReservationData={props.newReservationData}
                />
                {isJoinClicked && (
                  <BookModalPlayers
                    onClose={closeModal}
                    onAddPlayer={props.onAddPlayer}
                  />
                )}
              </BookingFormContext>
              <BookModalFooter
                onClose={closeModal}
                freeSlotData={props.freeSlotData}
                newReservationData={props.newReservationData}
              />
            </form>
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
}

export default BowlingCenterBookingModal;
