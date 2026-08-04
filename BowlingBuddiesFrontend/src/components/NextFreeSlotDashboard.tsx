import NextFreeSlotCard from "./NextFreeSlotCard.tsx";
function NextFreeSlotDashboard() {
  return (
    <section className="pt-2.5 pb-2.5">
      <h1 className="text-mh1 font-semibold">Next Free Slot</h1>
      <div className="flex flex-col gap-3 pt-2">
        <NextFreeSlotCard />
        <NextFreeSlotCard />
        <p className="text-mlinks text-right">Show more {'>'}</p>
      </div>
    </section>
  );
}

export default NextFreeSlotDashboard;
