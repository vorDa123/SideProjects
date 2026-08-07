import Navigation from "../components/Navigation.tsx";
import HeaderMob from "../components/Header.tsx";
import BowlingCentersDashboard from "../components/BowlingCentersDashboard.tsx";
import NextFreeSlotDashboard from "../components/NextFreeSlotDashboard.tsx";
import OpenJoinDashboard from "../components/OpenJoinDashboard.tsx";
import AchievementsDashboard from "../components/AchievementsDashboard.tsx";
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
            <BowlingCentersDashboard />
            <NextFreeSlotDashboard />
            <OpenJoinDashboard />
            <AchievementsDashboard />
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
