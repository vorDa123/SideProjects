import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faLocationDot,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import BowlingCenterBookingModal from "../modals/BowlingCenterBookModal.tsx";
import AddPlayerModal from "../modals/AddPlayerModal.tsx";
import { useState } from "react";
import type { NextFreeSlotCardProps } from "../../types/index.ts";

function NextFreeSlotCard(props: NextFreeSlotCardProps) {
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
        <BowlingCenterBookingModal
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
        <div className={`w-1/3 rounded-tl-m15 rounded-bl-m15 bg-[url(${props.freeSlotData.bowlingCenterData.img})] bg-center bg-cover`}></div>
        <div className="flex flex-col gap-6 md:gap-5 w-2/3 px-2 py-2">
          <p className="text-mh2 font-medium">{props.freeSlotData.bowlingCenterData.name}</p>
          <div className="flex flex-col gap-5 md:gap-3">
            <div className="flex flex-row gap-5">
              <span className="w-2/3">
                <FontAwesomeIcon icon={faCalendarDays} /> {props.freeSlotData.date}
              </span>
              <span className="w-1/3">
                <FontAwesomeIcon icon={faClock} /> {props.freeSlotData.time}
              </span>
            </div>
            <div className="flex flex-row gap-5">
              <span className="truncate w-2/3">
                <FontAwesomeIcon icon={faLocationDot} /> {props.freeSlotData.bowlingCenterData.location}
              </span>
              <span className="w-1/3">
                <FontAwesomeIcon icon={faUserGroup} /> {props.freeSlotData.numberOfFreeLanes}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NextFreeSlotCard;
