import type { AchievementCardProps } from "../../types/index.ts";
function AchievementsCard(props: AchievementCardProps) {
  return (
    <div className="snap-start shrink-0 w-19.75 h-19.75 bg-white-100 shadow-mob rounded-m15 flex flex-col justify-center items-center md:w-32.5 md:h-32.5 md:gap-3">
      <div
        className={`w-12.25 h-12.25 rounded-m5 bg-[url(${props.achievementData.img})] bg-center bg-cover md:w-17 md:h-17`}
      ></div>
      <p className="hidden md:block md:text-mh4">
        {props.achievementData.name}
      </p>
    </div>
  );
}

export default AchievementsCard;
