import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faLocationDot,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

function NextFreeSlotCard() {
  return (
    <div className="rounded-m15 shadow-mob w-full h-32.5 bg-white-100 flex flex-row">
      <div className="w-1/3 rounded-tl-m15 rounded-bl-m15 bg-[url(/src/assets/playerBowling.jpg)] bg-center bg-cover"></div>
      <div className="flex flex-col gap-6 md:gap-5 w-2/3 px-2 py-2">
        <p className="text-mh2 font-medium">West Bowling</p>
        <div className="flex flex-col gap-5 md:gap-3">
          <div className="flex flex-row gap-10">
            <span>
              <FontAwesomeIcon icon={faCalendarDays} /> 14.05.2026.
            </span>
            <span>
              <FontAwesomeIcon icon={faClock} /> 18:00
            </span>
          </div>
          <div className="flex flex-row gap-10">
            <span>
              <FontAwesomeIcon icon={faLocationDot} /> West Gate
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} /> 6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextFreeSlotCard;
