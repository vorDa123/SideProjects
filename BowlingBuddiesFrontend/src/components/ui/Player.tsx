import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPlus, faAward } from "@fortawesome/free-solid-svg-icons";
import type { PlayerProps } from "../../types/index.ts";

function Player(props: PlayerProps) {
  if (props.addPlayer) {
    return (
      <>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={props.onClick}
        >
          <div className="rounded-[100%] border-2 border-darkerBlue-100 text-center w-17.5 h-17.5 flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faPlus} className="text-th2" />
          </div>
          <span className="inline-block mt-2">Add player</span>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-col items-center cursor-pointer">
          <div className="rounded-[100%] border-2 border-darkerBlue-100 text-center w-17.5 h-17.5 flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faUser} className="text-th2" />
          </div>
          <span className="inline-block mt-2">
            {props.playerName}{" "}
            {props.isLeader ? <FontAwesomeIcon icon={faAward} /> : ""}
          </span>
        </div>
      </>
    );
  }
}

export default Player;
