import BowlingCenterCard from "./BowlingCenterCard.tsx";

function BowlingCentersDashboard() {
  return (
    <section className="pt-5 pb-2.5">
      <h1 className="text-mh1 font-semibold">Bowling Center</h1>
      <div className="flex flex-row gap-3.5 pt-2.5">
        <BowlingCenterCard bowlingCenterName="West Bowling"/>
        <BowlingCenterCard bowlingCenterName="Kooglana"/>
      </div>
    </section>
  );
}

export default BowlingCentersDashboard;
