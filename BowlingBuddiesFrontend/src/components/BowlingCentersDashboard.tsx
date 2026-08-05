import BowlingCenterCard from "./BowlingCenterCard.tsx";

function BowlingCentersDashboard() {
  return (
    <section className="pt-5 pb-2.5 w-full lg:col-span-12 md:col-span-2">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-mh1 w-2/3 md:w-1/2 lg:w-3/5 font-semibold">Bowling Center</h1>
        <input className="border border-darkerBlue-100 rounded-m15 h-5 py-3 px-2 w-1/3 lg:w-2/5 md:w-1/2" type="search" name="search" id="searchDashboard" placeholder="Search..."/>
      </div>
      <div className="flex flex-row flex-nowrap gap-2 snap-x py-2.5 overflow-x-scroll md:gap-3.75 xl:gap-5">
        <BowlingCenterCard bowlingCenterName="West Bowling" />
        <BowlingCenterCard bowlingCenterName="Kooglana" />
        <BowlingCenterCard bowlingCenterName="Kooglana" />
        <BowlingCenterCard bowlingCenterName="Kooglana" />
      </div>
    </section>
  );
}

export default BowlingCentersDashboard;
