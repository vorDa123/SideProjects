import Navigation from "../components/layouts/Navigation.tsx";
import HeaderMob from "../components/layouts/Header.tsx";
import BowlingCentersSection from "../features/bowling-centers/BowlingCentersSection.tsx";
import NextFreeSlotSection from "../features/reservations/NextFreeSlotSection.tsx";
import OpenJoinSection from "../features/open-join/OpenJoinSection.tsx";
import AchievementsSection from "../features/achievements/AchievementsSection.tsx";
function Dashboard() {
  return (
    <>
      <div className="flex flex-col">
        <HeaderMob />
        <div className="hidden lg:block">
          <Navigation />
        </div>
        <main className="w-full max-w-4xl mx-auto px-6 sm:px-6 lg:max-w-3hxl lg:mx-36 xl:max-w-6xl sxl:max-w-7hxl sxl:mx-25 lxl:mx-50 xxl:max-w-9xl">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-3 lg:grid-cols-12 lg:gap-4 xl:gap-x-6 sxl:gap-x-4 xxl:grid-cols-24 xxl:gap-4">
            <BowlingCentersSection />
            <NextFreeSlotSection />
            <OpenJoinSection />
            <AchievementsSection />
          </div>
          <br />
          <br />
          <br />
          <br className="md:hidden" />
          <br className="md:hidden" />
          <div className="lg:hidden">
            <Navigation />
          </div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;
