import LabelTag from "../../components/ui/LabelTag";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faClock } from "@fortawesome/free-solid-svg-icons";
import type { ModalProps } from "../../types";
import { formatDateIntl, getDayNameIntl } from "../../services/dateServices";

function JoinModalInfo(props: ModalProps) {
  const dateToDisplay = formatDateIntl(props.joinSlotData!.date);
  const dayNameToDisplay = getDayNameIntl(props.joinSlotData!.date);
  const hoursFromTime = props.joinSlotData?.startTime.slice(0, 2);
  const minutesFromTime = props.joinSlotData?.startTime.slice(3);
  const endTime = Number(hoursFromTime) + props.joinSlotData!.duration;
  return (
    <>
      <div className="col-span-8">
        <div>
          <div className="flex flex-row gap-2 mb-2">
            <LabelTag labelValue="Fun" />
            <LabelTag labelValue="Professional" />
          </div>
          <p className="text-mh1 font-semibold my-1">
            {props.joinSlotData?.bowlingCenterInfo.name}
          </p>
          <p>{props.joinSlotData?.bowlingCenterInfo.location}</p>
        </div>
      </div>
      <div className="col-span-8 mt-7 md:mt-5">
        <p className="text-mh3 font-semibold my-1">Date & Time</p>
        <div className="flex flex-col gap-2">
          <span>
            <FontAwesomeIcon icon={faCalendarDays} /> {dayNameToDisplay}
            {", "}
            {dateToDisplay}
          </span>
          <span>
            <FontAwesomeIcon icon={faClock} /> {props.joinSlotData?.startTime}{" - "}
            {`${endTime}:${minutesFromTime}`}
          </span>
        </div>
      </div>
    </>
  );
}

export default JoinModalInfo;
