import NextFreeSlotCard from "./NextFreeSlotCard.tsx";
function NextFreeSlotDashboard() {
  return (
    <section className="pt-2.5 pb-2.5 w-full lg:col-span-6 xl:col-span-4">
      <h1 className="text-mh1 font-semibold">Next Free Slot</h1>
      <div className="flex flex-col gap-3 pt-2">
        <NextFreeSlotCard />
        <NextFreeSlotCard />
        <NextFreeSlotCard />
        <p className="text-mlinks text-right max-w-94.25 md:text-tlinks">Show more {'>'}</p>
      </div>
    </section>
  );
}

export default NextFreeSlotDashboard;
