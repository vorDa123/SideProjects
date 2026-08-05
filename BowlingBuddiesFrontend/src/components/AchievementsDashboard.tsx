import AchievementsCard from "./AchievementsCard.tsx";

function AchievementsDashboard() {
  return (
    <section className="pt-2.5 pb-2.5 w-full lg:col-span-12 md:col-span-2 xl:col-span-4">
      <h1 className="text-mh1 font-semibold">Achievements</h1>
      <div className="flex flex-row flex-nowrap gap-3 snap-x py-2.5 overflow-x-scroll md:gap-3.75 md:flex-wrap sxl:gap-2">
        <AchievementsCard />
        <AchievementsCard />
        <AchievementsCard />
        <AchievementsCard />
        <AchievementsCard />
        <AchievementsCard />
      </div>
    </section>
  );
}

export default AchievementsDashboard;
