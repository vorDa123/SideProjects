import LabelTag from "../../components/ui/LabelTag";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faClock } from "@fortawesome/free-solid-svg-icons";

function JoinModalInfo() {
  return (
    <>
      <div className="col-span-8">
        <div>
          <div className="flex flex-row gap-2 mb-2">
            <LabelTag labelValue="Fun" />
            <LabelTag labelValue="Professional" />
          </div>
          <p className="text-mh1 font-semibold my-1">West Bowling</p>
          <p>Zaprešićka 2, 10290, Jablanovec</p>
        </div>
      </div>
      <div className="col-span-8 mt-7 md:mt-5">
        <p className="text-mh3 font-semibold my-1">Date & Time</p>
        <div className="flex flex-col gap-2">
          <span>
            <FontAwesomeIcon icon={faCalendarDays} /> Thursday, 14.05.2026.
          </span>
          <span>
            <FontAwesomeIcon icon={faClock} /> 18:00 - 20:00
          </span>
        </div>
      </div>
    </>
  );
}

export default JoinModalInfo;
