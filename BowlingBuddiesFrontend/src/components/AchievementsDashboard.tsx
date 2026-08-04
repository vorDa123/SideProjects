import AchievementsCard from "./AchievementsCard.tsx";

function AchievementsDashboard() {
  return (
    <section className="pt-5 pb-2.5">
      <h1 className="text-mh1 md:text-th2 font-semibold">Achievements</h1>
      <div className="flex flex-row flex-nowrap gap-3 snap-x py-2.5 px-2.5 overflow-x-scroll md:gap-3.75">
        <AchievementsCard />
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
