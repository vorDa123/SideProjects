import AchievementsCard from "./AchievementsCard.tsx";
import type { MyProfileProps } from "../types/Types.ts";

function AchievementsSection({ myProfilePage = false }: MyProfileProps) {
  return (
    <>
      {myProfilePage ? (
        <section className="pt-2.5 pb-2.5 w-full md:col-span-2 lg:col-span-12 xl:col-span-4 xxl:col-span-12">
          <h1 className="text-mh1 font-semibold">Achievements</h1>
          <div className="flex flex-row flex-nowrap gap-3 snap-x py-2.5 overflow-x-scroll md:overflow-x-hidden md:gap-x-3.75 md:gap-y-3 md:flex-wrap sxl:gap-x-2 xxl:gap-x-7">
            <AchievementsCard />
            <AchievementsCard />
            <AchievementsCard />
            <AchievementsCard />
            <AchievementsCard />
            <AchievementsCard />
          </div>
        </section>
      ) : (
        <section className="pt-2.5 pb-2.5 w-full md:col-span-2 lg:col-span-12 xl:col-span-4 xxl:col-span-12">
          <h1 className="text-mh1 font-semibold">Achievements</h1>
          <div className="flex flex-row flex-nowrap gap-3 snap-x py-2.5 overflow-x-scroll md:overflow-x-hidden md:gap-x-3.75 md:gap-y-3 md:flex-wrap sxl:gap-x-2 xxl:gap-x-7">
            <AchievementsCard />
            <AchievementsCard />
            <AchievementsCard />
            <AchievementsCard />
            <AchievementsCard />
            <AchievementsCard />
          </div>
        </section>
      )}
    </>
  );
}

export default AchievementsSection;
