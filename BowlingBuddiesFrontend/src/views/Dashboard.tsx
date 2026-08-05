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
        <main className="w-full max-w-2hxl mx-auto px-6 sm:px-6 lg:max-w-4xl lg:mx-28 xl:max-w-6xl sxl:max-w-7xl sxl:mx-32 lxl:max-w-9xl lxl:mx-50">
          <BowlingCentersDashboard />
          <div className="lg:flex lg:flex-row lg:gap-3.75">
            <NextFreeSlotDashboard />
            <OpenJoinDashboard />
          </div>
          <AchievementsDashboard />
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
