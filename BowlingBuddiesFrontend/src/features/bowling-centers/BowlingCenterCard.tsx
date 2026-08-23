import type { BowlingCenterCardProps } from "../../types/index.ts";
import { useNavigate } from "react-router";

function BowlingCenterCard(props: BowlingCenterCardProps) {
  const navigate = useNavigate();
  const handleNavigateBowlingCenterPage = () => {
    navigate(`/bowlingcenter/${props.bowlingCenterID}`);
  };
  return (
    <div
      className="snap-start shrink-0 w-45.25 h-48.25 shadow-mob rounded-m20 bg-[url(/src/assets/playerBowling.jpg)] bg-center bg-cover cursor-pointer"
      onClick={handleNavigateBowlingCenterPage}
    >
      <div className="w-full h-full rounded-m20 bg-linear-to-t from-black-70 to-black-00 flex flex-col justify-end items-center">
        <p className="text-white-100 text-mh2 pb-2 text-center max-w-full font-medium">
          {props.bowlingCenterName}
        </p>
      </div>
    </div>
  );
}

export default BowlingCenterCard;
