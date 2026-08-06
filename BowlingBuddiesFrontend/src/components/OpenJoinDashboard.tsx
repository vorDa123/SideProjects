import OpenJoinCard from "./OpenJoinCard.tsx";

function OpenJoinDashboard() {
  return (
    <section className="pt-2.5 pb-2.5 w-full lg:col-span-6 xl:col-span-4 xxl:col-span-6">
      <h1 className="text-mh1 font-semibold">Open Join</h1>
      <div className="flex flex-col gap-3 pt-2">
        <OpenJoinCard />
        <OpenJoinCard />
        <OpenJoinCard />
        <p className="text-mlinks text-right max-w-94.25 md:text-tlinks">Show more {'>'}</p>
      </div>
    </section>
  );
}

export default OpenJoinDashboard;
