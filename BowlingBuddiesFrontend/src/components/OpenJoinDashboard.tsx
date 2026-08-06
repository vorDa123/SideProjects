import OpenJoinCard from "./OpenJoinCard.tsx";

type OpenJoinProps = {
  openJoinBowlingPage?: boolean;
};

function OpenJoinDashboard({ openJoinBowlingPage = false }: OpenJoinProps) {
  return (
    <>
      {openJoinBowlingPage ? (
        <section className="pt-2.5 pb-2.5 w-full md:col-span-2 lg:col-span-12 xxl:col-span-24">
          <h1 className="text-mh1 font-semibold">Open Join</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 gap-3 pt-2">
            <OpenJoinCard />
            <OpenJoinCard />
            <OpenJoinCard />
            <OpenJoinCard />
          </div>
        </section>
      ) : (
        <section className="pt-2.5 pb-2.5 w-full lg:col-span-6 xl:col-span-4 xxl:col-span-6">
          <h1 className="text-mh1 font-semibold">Open Join</h1>
          <div className="grid grid-cols-1 gap-3 pt-2">
            <OpenJoinCard />
            <OpenJoinCard />
            <OpenJoinCard />
            <p className="text-mlinks text-right md:text-tlinks">
              Show more {">"}
            </p>
          </div>
        </section>
      )}
    </>
  );
}

export default OpenJoinDashboard;
