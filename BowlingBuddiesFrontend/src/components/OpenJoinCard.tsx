import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faLocationDot,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

function OpenJoinCard() {
  return (
    <div className="rounded-m15 shadow-mob w-full max-w-94.25 h-32.5 bg-white-100">
      <div className="flex flex-col gap-3 justify-around w-full h-full px-2 py-2">
        <div className="flex flex-row justify-between">
          <p className="text-mh2 font-medium">West Bowling</p>
          <div className="flex flex-row gap-2">
            <div className="bg-yellow-100 rounded-m12 px-2 pt-0.5 text-center md:rounded-m15">Fun</div>
            <div className="bg-yellow-100 rounded-m12 px-2 pt-0.5 text-center md:rounded-m15">Professional</div>
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
          <button className="text-mh2 font-medium bg-orange-100 py-2 px-8 rounded-m25 text-center">
            JOIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenJoinCard;
