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
        <main className="mx-auto my-0 w-[87vw] relative">
          <BowlingCentersDashboard />
          <NextFreeSlotDashboard />
          <OpenJoinDashboard />
          <AchievementsDashboard />
          <br/>
          <br/>
          <br/>
          <br/>
          <Navigation />
        </main>
      </div>
    </>
  );
}

export default Dashboard;
