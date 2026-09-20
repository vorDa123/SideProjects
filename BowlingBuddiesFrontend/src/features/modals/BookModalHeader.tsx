import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import type { ModalProps } from "../../types";
import { formatDateIntl, getDayNameIntl } from "../../services/dateServices";

function BookModalHeader(props: ModalProps) {
  const dateFormatToDisplay = formatDateIntl(props.myReservationData!.date);
  const dayNameToDisplay = getDayNameIntl(props.myReservationData!.date);
  return (
    <>
      <div className="col-span-8">
        <div className="flex flex-row justify-between">
          <div>
            <p className="text-mh3">
              {dayNameToDisplay}
              {","} {dateFormatToDisplay}
            </p>
            <p className="text-mh1 font-semibold my-1">
              {props.myReservationData?.bowlingCenterInfo.name}
            </p>
            <p>{props.myReservationData?.bowlingCenterInfo.location}</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="text-mh1 cursor-pointer"
              onClick={props.onClose}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BookModalHeader;
