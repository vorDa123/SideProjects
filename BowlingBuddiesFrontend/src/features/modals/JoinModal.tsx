import JoinModalInfo from "./JoinModalInfo.tsx";
import JoinModalFooter from "./JoinModalFooter.tsx";
import JoinModalPlayers from "./JoinModalPlayers.tsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

function JoinModal() {
  return (
    <>
      <div className="z-50 bg-darkerBlue-60 h-dvh w-dvw fixed inset-0 pointer-events-none touch-none"></div>
      <div className="bg-white-100 mx-auto my-5 w-9/10 h-[90dvh] fixed top-0 left-0 right-0 z-60 rounded-m30 md:w-8/10 md:h-[95dvh] lg:w-5/10 xl:w-4/10 xxl:w-3/10 xxl:h-[85dvh]">
        <div className="col-span-8 bg-[url(/src/assets/playerBowling.jpg)] bg-center bg-cover w-full h-64 rounded-tl-m30 rounded-tr-m30">
          <div className="w-full h-full flex flex-col justify-between items-end">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="text-mh1 cursor-pointer mx-5 my-5 text-white-100"
            />
            <FontAwesomeIcon
              icon={faMapLocationDot}
              className="text-mh1 cursor-pointer mx-5 my-5 text-white-100"
            />
          </div>
        </div>
        <div className="overflow-y-auto h-full px-6 py-7 md:py-5 xl:py-5 mxl:py-10 xxl:py-5">
          <div className="grid grid-cols-8 gap-x-4 auto-rows-max">
            <JoinModalInfo />
            <JoinModalPlayers />
            <JoinModalFooter />
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinModal;
