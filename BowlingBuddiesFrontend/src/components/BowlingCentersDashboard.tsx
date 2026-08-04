import BowlingCenterCard from "./BowlingCenterCard.tsx";

function BowlingCentersDashboard() {
  return (
    <section className="pt-5 pb-2.5">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-mh1 font-semibold">Bowling Center</h1>
        <input className="border border-darkerBlue-100 rounded-m15 h-5 py-3 px-2 w-32" type="search" name="search" id="searchDashboard" placeholder="Search..."/>
      </div>
      <div className="flex flex-row flex-nowrap gap-2 snap-x pt-2.5 overflow-x-scroll">
        <BowlingCenterCard bowlingCenterName="West Bowling" />
        <BowlingCenterCard bowlingCenterName="Kooglana" />
        <BowlingCenterCard bowlingCenterName="Kooglana" />
      </div>
    </section>
  );
}

export default BowlingCentersDashboard;
