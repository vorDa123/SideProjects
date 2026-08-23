import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import type { ModalProps } from "../../types";

function BookModalHeader(props: ModalProps) {
  return (
    <>
      <div className="col-span-8">
        <div className="flex flex-row justify-between">
          <div>
            <p className="text-mh3">Thursday, 14.05.2026</p>
            <p className="text-mh1 font-semibold my-1">West Bowling</p>
            <p>Zaprešićka 2, 10290, Jablanovec</p>
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
