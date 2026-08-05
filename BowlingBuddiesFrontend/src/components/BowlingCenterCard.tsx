type BowlingCenterCardProps = {
  bowlingCenterName: string;
};
function BowlingCenterCard({ bowlingCenterName }: BowlingCenterCardProps) {
  return (
    <div className="snap-start shrink-0 w-43.75 h-43.75 shadow-mob rounded-m20 bg-[url(/src/assets/playerBowling.jpg)] bg-center bg-cover md:w-60.5 md:h-60.5 xl:w-70 xl:h-70">
      <div className="w-full h-full rounded-m20 bg-linear-to-t from-black-70 to-black-00 flex flex-col justify-end items-center">
        <p className="text-white-100 text-mh2 pb-2 text-center max-w-full font-medium md:text-th3">
          {bowlingCenterName}
        </p>
      </div>
    </div>
  );
}

export default BowlingCenterCard;
