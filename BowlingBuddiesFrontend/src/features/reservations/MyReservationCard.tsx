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

function MyReservationCard(props: MyReservationsProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showPlayerModal, setShowPlayerModal] = useState<boolean>(false);
  const [isJoinClicked, setIsJoinClicked] = useState<boolean>(false);
  const handleShowModal = () => {
    setShowModal((prev) => !prev);
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
  return (
    <>
      {showModal && (
        <EditBookingModal
          isOpen={showModal}
          onClose={handleShowModal}
          onAddPlayer={handleAddPlayer}
          isJoinClicked={isJoinClicked}
          setIsJoinClicked={handleJoinClicked}
        />
      )}
      {showPlayerModal && (
        <AddPlayerModal
          isOpen={showPlayerModal}
          onClose={() => setShowPlayerModal(false)}
          onBack={handleBack}
        />
      )}
      <div
        className="rounded-m15 shadow-mob w-full h-32.5 bg-white-100 flex flex-row cursor-pointer"
        onClick={handleShowModal}
      >
        <div className={`w-1/3 rounded-tl-m15 rounded-bl-m15 bg-[url(${props.myReservationData.bowlingCenterInfo.img})] bg-center bg-cover`}></div>
        <div className="flex flex-col gap-6 md:gap-5 w-2/3 px-2 py-2">
          <div className="flex flex-row justify-between items-center">
            {props.myReservationPage ? (
              <p className="font-medium text-mh3 xsm:text-mh2 md:text-th4">
                {props.myReservationData.bowlingCenterInfo.name}
              </p>
            ) : (
              <p className="font-medium text-mh3 xsm:text-mh2">
                {props.myReservationData.bowlingCenterInfo.name}
              </p>
            )}
            <span className="cursor-pointer">
              <FontAwesomeIcon icon={faXmark} /> Cancel
            </span>
          </div>
          <div className="flex flex-col gap-5 md:gap-3">
            <div className="flex flex-row gap-5">
              <span className="w-2/3">
                <FontAwesomeIcon icon={faCalendarDays} />
                {props.myReservationData.date}
              </span>
              <span className="w-1/3">
                <FontAwesomeIcon icon={faClock} />{" "}
                {props.myReservationData.startTime}
              </span>
            </div>
            <div className="flex flex-row gap-5">
              <span className="truncate w-2/3">
                <FontAwesomeIcon icon={faLocationDot} />{" "}
                {props.myReservationData.bowlingCenterInfo.location}
              </span>
              <span className="w-1/3">
                <FontAwesomeIcon icon={faUserGroup} />{" "}
                {props.myReservationData.numberOfPlayers} {" / "}
                {props.myReservationData.bowlingCenterInfo.maxPlayersPerAlley}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyReservationCard;
