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
        <Navigation />
        <main className="mx-auto my-0 w-[87vw] relative md:w-[79.2vw] md:mx-45">
          <BowlingCentersDashboard />
          <div className="md:flex md:flex-row md:justify-between">
            <NextFreeSlotDashboard />
            <OpenJoinDashboard />
          </div>
          <AchievementsDashboard />
          <br />
          <br />
          <br className="md:hidden"/>
          <br className="md:hidden"/>
          <div className="md:hidden">
            <Navigation />
          </div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;
