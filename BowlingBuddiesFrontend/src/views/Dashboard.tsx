import Navigation from "../components/Navigation.tsx";
import HeaderMob from "../components/Header.tsx";
import BowlingCentersDashboard from "../components/BowlingCentersDashboard.tsx";
import NextFreeSlotDashboard from "../components/NextFreeSlotDashboard.tsx";
import OpenJoinDashboard from "../components/OpenJoinDashboard.tsx";
function Dashboard() {
  return (
    <>
      <div className="flex flex-col">
        <HeaderMob />
        <main className="mx-auto my-0 w-[87vw] relative">
          <BowlingCentersDashboard />
          <NextFreeSlotDashboard />
          <OpenJoinDashboard/>
          <section className="pt-2.5 pb-2.5">
            <h1 className="text-mh1 font-semibold">Achievements</h1>
          </section>
          <Navigation />
        </main>
      </div>
    </>
  );
}

export default Dashboard;
