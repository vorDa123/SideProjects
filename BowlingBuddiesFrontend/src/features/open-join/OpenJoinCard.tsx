import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LabelTag from "../../components/ui/LabelTag.tsx";
import {
  faCalendarDays,
  faClock,
  faLocationDot,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import MainButton from "../../components/ui/MainButton.tsx";
import JoinModal from "../modals/JoinModal.tsx";
import { useState } from "react";
import type { OpenJoinCardProps } from "../../types/index.ts";
import { formatDateIntl } from "../../services/dateServices.ts";

function OpenJoinCard(props: OpenJoinCardProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };

  const dateFormatToDisplay = formatDateIntl(props.joinData.date);

  return (
    <>
      {showModal && <JoinModal isOpen={showModal} onClose={handleShowModal} />}
      <div className="rounded-m15 shadow-mob w-full h-32.5 bg-white-100">
        <div className="flex flex-col gap-3 justify-around w-full h-full px-2 py-2">
          <div className="flex flex-row justify-between">
            <p className="text-mh2 font-medium">
              {props.joinData.bowlingCenterData.name}
            </p>
            <div className="flex flex-row gap-2">
              <LabelTag labelValue="Fun" />
              <LabelTag labelValue="Professional" />
            </div>
          </div>
          <div className="flex flex-row justify-between h-full items-center">
            <div className="flex flex-col gap-5 w-1/3 pr-1 md:gap-3">
              <p>
                <FontAwesomeIcon icon={faCalendarDays} /> {dateFormatToDisplay}
              </p>
              <p className="truncate">
                <FontAwesomeIcon icon={faLocationDot} />{" "}
                {props.joinData.bowlingCenterData.location}
              </p>
            </div>
            <div className="flex flex-col gap-5 w-1/3 pl-1 md:gap-3">
              <span>
                <FontAwesomeIcon icon={faClock} /> {props.joinData.time}
              </span>
              <span className="text-orange-100">
                <FontAwesomeIcon icon={faUserGroup} />{" "}
                {props.joinData.joinedPlayers?.length}/
                {props.joinData.bowlingCenterData.maxPlayersPerAlley}
              </span>
            </div>
            <MainButton
              variant="fill"
              buttonName="JOIN"
              onClick={handleShowModal}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OpenJoinCard;
