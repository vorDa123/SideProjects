import MainButton from "../../components/ui/MainButton";
import type { BookingCardProps } from "../../types/index.ts";
import BowlingCenterBookingModal from "../modals/BowlingCenterBookModal.tsx";
import AddPlayerModal from "../modals/AddPlayerModal.tsx";
import { useState } from "react";
function BowlingCenterBookingTableCard(props: BookingCardProps) {
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
  const handleBack = () => {
    setShowModal((prev) => !prev);
    setShowPlayerModal((prev) => !prev);
  };
  const handleJoinClicked = () => {
    setIsJoinClicked((prev) => !prev);
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
      <div className="col-span-1 border-b border-b-darkerBlue-30 py-2">
        <span className="text-mh4">{props.bookingTime}</span>
      </div>
      <div className="col-span-3 border-b border-b-darkerBlue-30 py-2">
        <div className="rounded-m25 bg-white-100 shadow-mob flex flex-col justify-center items-center py-5 gap-2">
          <p className="text-mh3">6/12 Lanes booked</p>
          <MainButton
            buttonName="Book"
            variant="fill"
            onClick={handleShowModal}
          />
        </div>
      </div>
    </>
  );
}

export default BowlingCenterBookingTableCard;
