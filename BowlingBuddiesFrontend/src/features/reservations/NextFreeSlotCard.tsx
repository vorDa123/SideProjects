import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faLocationDot,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";
import BowlingCenterBookingModal from "../modals/BowlingCenterBookModal.tsx";
import AddPlayerModal from "../modals/AddPlayerModal.tsx";
import { useState } from "react";
import type { NextFreeSlotCardProps } from "../../types/index.ts";
import { formatDateIntl } from "../../services/dateServices.ts";
import { useBooking } from "../../hooks/useBooking.tsx";

function NextFreeSlotCard(props: NextFreeSlotCardProps) {
  const { freeSlots } = useBooking();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showPlayerModal, setShowPlayerModal] = useState<boolean>(false);
  const [isJoinClicked, setIsJoinClicked] = useState<boolean>(
    props.freeSlotData.openJoin ?? false,
  );

  const currentSlotData =
    freeSlots?.find((slot) => slot.id === props.freeSlotData.id) ||
    props.freeSlotData;

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

  const dateFormatToDisplay = formatDateIntl(currentSlotData.date);

  return (
    <>
      {showModal && (
        <BowlingCenterBookingModal
          isOpen={showModal}
          onClose={handleShowModal}
          onAddPlayer={handleAddPlayer}
          isJoinClicked={isJoinClicked}
          setIsJoinClicked={handleJoinClicked}
          freeSlotData={currentSlotData}
        />
      )}
      {showPlayerModal && (
        <AddPlayerModal
          isOpen={showPlayerModal}
          onClose={() => setShowPlayerModal(false)}
          freeSlotData={currentSlotData}
          onBack={handleBack}
        />
      )}
      <div
        className="slot-card rounded-m15 shadow-mob w-full h-32.5 bg-white-100 flex flex-row cursor-pointer"
        onClick={handleShowModal}
      >
        <div
          className={`w-1/3 rounded-tl-m15 rounded-bl-m15 bg-[url(${currentSlotData?.bowlingCenterInfo?.img})] bg-center bg-cover`}
        ></div>
        <div className="flex flex-col gap-6 md:gap-5 w-2/3 px-2 py-2">
          <p className="text-mh2 font-medium">
            {currentSlotData?.bowlingCenterInfo?.name}
          </p>
          <div className="flex flex-col gap-5 md:gap-3">
            <div className="flex flex-row gap-5">
              <span className="w-2/3">
                <FontAwesomeIcon icon={faCalendarDays} /> {dateFormatToDisplay}
              </span>
              <span className="w-1/3">
                <FontAwesomeIcon icon={faClock} />{" "}
                {currentSlotData?.startTime}
              </span>
            </div>
            <div className="flex flex-row gap-5">
              <span className="truncate w-2/3">
                <FontAwesomeIcon icon={faLocationDot} />{" "}
                {currentSlotData?.bowlingCenterInfo?.location}
              </span>
              <span className="w-1/3">
                <FontAwesomeIcon icon={faRoad} />{" "}
                {currentSlotData?.numberOfFreeLanes}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NextFreeSlotCard;
