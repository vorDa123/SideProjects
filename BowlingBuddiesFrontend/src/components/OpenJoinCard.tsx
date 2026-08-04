import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faLocationDot,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

function OpenJoinCard() {
  return (
    <div className="rounded-m15 shadow-mob w-91 h-32.5 bg-white-100">
      <div className="flex flex-col gap-3 justify-around w-full h-full px-2 py-2">
        <div className="flex flex-row justify-between">
          <p className="text-mh2 font-medium">West Bowling</p>
          <div className="flex flex-row gap-2">
            <div className="bg-yellow-100 rounded-m12 px-2 pt-0.5 text-center">Fun</div>
            <div className="bg-yellow-100 rounded-m12 px-2 pt-0.5 text-center">Professional</div>
          </div>
        </div>
        <div className="flex flex-row justify-between h-full items-center">
          <div className="flex flex-col gap-5">
            <p>
              <FontAwesomeIcon icon={faCalendarDays} /> 14.05.2026.
            </p>
            <p>
              <FontAwesomeIcon icon={faLocationDot} /> West Gate
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <span>
              <FontAwesomeIcon icon={faClock} /> 18:00
            </span>
            <span className="text-orange-100">
              <FontAwesomeIcon icon={faUserGroup} /> 4/6
            </span>
          </div>
          <button className="text-mh2 font-medium bg-orange-100 h-9.5 w-33.5 rounded-m25 text-center">
            JOIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenJoinCard;
