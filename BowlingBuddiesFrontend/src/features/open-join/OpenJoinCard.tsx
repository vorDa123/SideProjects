import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LabelTag from "../../components/ui/LabelTag.tsx";
import {
  faCalendarDays,
  faClock,
  faLocationDot,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import MainButton from "../../components/ui/MainButton.tsx";

function OpenJoinCard() {
  return (
    <div className="rounded-m15 shadow-mob w-full h-32.5 bg-white-100">
      <div className="flex flex-col gap-3 justify-around w-full h-full px-2 py-2">
        <div className="flex flex-row justify-between">
          <p className="text-mh2 font-medium">West Bowling</p>
          <div className="flex flex-row gap-2">
            <LabelTag labelValue="Fun" />
            <LabelTag labelValue="Professional" />
          </div>
        </div>
        <div className="flex flex-row justify-between h-full items-center">
          <div className="flex flex-col gap-5 md:gap-3">
            <p>
              <FontAwesomeIcon icon={faCalendarDays} /> 14.05.2026.
            </p>
            <p>
              <FontAwesomeIcon icon={faLocationDot} /> West Gate
            </p>
          </div>
          <div className="flex flex-col gap-5 md:gap-3">
            <span>
              <FontAwesomeIcon icon={faClock} /> 18:00
            </span>
            <span className="text-orange-100">
              <FontAwesomeIcon icon={faUserGroup} /> 4/6
            </span>
          </div>
          <MainButton variant="fill" buttonName="JOIN"/>
        </div>
      </div>
    </div>
  );
}

export default OpenJoinCard;
