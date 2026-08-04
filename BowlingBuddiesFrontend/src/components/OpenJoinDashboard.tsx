import OpenJoinCard from "./OpenJoinCard.tsx";

function OpenJoinDashboard() {
  return (
    <section className="pt-2.5 pb-2.5">
      <h1 className="text-mh1 md:text-th2 font-semibold">Open Join</h1>
      <div className="flex flex-col gap-3 pt-2">
        <OpenJoinCard />
        <OpenJoinCard />
        <p className="text-mlinks text-right md:text-tlinks">Show more {'>'}</p>
      </div>
    </section>
  );
}

export default OpenJoinDashboard;
