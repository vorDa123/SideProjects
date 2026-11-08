import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faLocationDot,
  faXmark,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import type { MyReservationsProps } from "../../types/index.ts";

import EditBookingModal from "../modals/EditBookModal.tsx";
import AddPlayerModal from "../modals/AddPlayerModal.tsx";
import { useState } from "react";
import { formatDateIntl } from "../../services/dateServices.ts";
import { useBooking } from "../../hooks/useBooking.tsx";

function MyReservationCard(props: MyReservationsProps) {
  const { myReservations } = useBooking();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showPlayerModal, setShowPlayerModal] = useState<boolean>(false);
  const [isJoinClicked, setIsJoinClicked] = useState<boolean>(Boolean(props.myReservationData?.openJoin));
  const currentReservationData =
    myReservations?.find((slot) => slot.id === props.myReservationData?.id) ||
    props.myReservationData;
  const handleShowModal = () => {
    setShowModal((prev) => !prev);
    setIsJoinClicked(Boolean(props.myReservationData?.openJoin));
  };
  const handleAddPlayer = () => {
    setShowModal((prev) => !prev);
    setShowPlayerModal((prev) => !prev);
  };
  const handleJoinClicked = () => {
    setIsJoinClicked((prev) => !prev);
  };
  const handleBack = () => {
    setShowModal((prev) => !prev);
    setShowPlayerModal((prev) => !prev);
  };
  const dateFormatToDisplay = formatDateIntl(currentReservationData!.date);
  return (
    <>
      {showModal && (
        <EditBookingModal
          isOpen={showModal}
          onClose={handleShowModal}
          onAddPlayer={handleAddPlayer}
          isJoinClicked={isJoinClicked}
          setIsJoinClicked={handleJoinClicked}
          myReservationData={currentReservationData}
        />
      )}
      {showPlayerModal && (
        <AddPlayerModal
          isOpen={showPlayerModal}
          onClose={() => setShowPlayerModal(false)}
          myReservationData={currentReservationData}
          onBack={handleBack}
        />
      )}
      <div
        className="slot-card rounded-m15 shadow-mob w-full h-32.5 bg-white-100 flex flex-row cursor-pointer"
        onClick={handleShowModal}
      >
        <div
          className={`w-1/3 rounded-tl-m15 rounded-bl-m15 bg-[url(${currentReservationData?.bowlingCenterInfo?.img})] bg-center bg-cover`}
        ></div>
        <div className="flex flex-col gap-6 md:gap-5 w-2/3 px-2 py-2">
          <div className="flex flex-row justify-between items-center">
            {props.myReservationPage ? (
              <p className="font-medium text-mh3 xsm:text-mh2 md:text-th4">
                {currentReservationData?.bowlingCenterInfo?.name}
              </p>
            ) : (
              <p className="font-medium text-mh3 xsm:text-mh2">
                {currentReservationData?.bowlingCenterInfo?.name}
              </p>
            )}
            <span className="cursor-pointer">
              <FontAwesomeIcon icon={faXmark} /> Cancel
            </span>
          </div>
          <div className="flex flex-col gap-5 md:gap-3">
            <div className="flex flex-row gap-5">
              <span className="w-2/3">
                <FontAwesomeIcon icon={faCalendarDays} /> {dateFormatToDisplay}
              </span>
              <span className="w-1/3">
                <FontAwesomeIcon icon={faClock} />{" "}
                {currentReservationData?.startTime}
              </span>
            </div>
            <div className="flex flex-row gap-5">
              <span className="truncate w-2/3">
                <FontAwesomeIcon icon={faLocationDot} />{" "}
                {currentReservationData?.bowlingCenterInfo?.location}
              </span>
              <span className="w-1/3">
                <FontAwesomeIcon icon={faUserGroup} />{" "}
                {currentReservationData?.numberOfPlayers} {" / "}
                {currentReservationData?.bowlingCenterInfo?.maxPlayersPerAlley}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyReservationCard;
