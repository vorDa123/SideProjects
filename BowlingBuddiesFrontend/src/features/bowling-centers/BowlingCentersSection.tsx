import BowlingCenterCard from "./BowlingCenterCard.tsx";
import { useBooking } from "../../hooks/useBooking.tsx";
import { useEffect } from "react";

function BowlingCentersSection() {
  const { centers, fetchCenters, isLoading } = useBooking();

  useEffect(() => {
    fetchCenters!();
  }, []);

  return isLoading ? (
    <section className="pt-5 pb-2.5 w-full lg:col-span-12 md:col-span-2 xxl:col-span-24">
      <div className="flex flex-row items-center justify-between gap-10">
        <div className="bg-gray-400 w-2/3 md:w-1/2 lg:w-3/5 h-7 rounded-m20"></div>
        <div className="bg-gray-400 w-1/3 lg:w-2/5 md:w-1/2 h-7 rounded-m20"></div>
      </div>
      <div className="flex flex-row flex-nowrap gap-2 snap-x py-2.5 overflow-x-auto md:gap-3.75 xl:gap-5">
        <div className="bg-gray-400 shrink-0 w-45.25 h-48.25 rounded-m20"></div>
        <div className="bg-gray-400 shrink-0 w-45.25 h-48.25 rounded-m20"></div>
        <div className="bg-gray-400 shrink-0 w-45.25 h-48.25 rounded-m20"></div>
        <div className="bg-gray-400 shrink-0 w-45.25 h-48.25 rounded-m20"></div>
        <div className="bg-gray-400 shrink-0 w-45.25 h-48.25 rounded-m20"></div>
      </div>
    </section>
  ) : (
    <section className="pt-5 pb-2.5 w-full lg:col-span-12 md:col-span-2 xxl:col-span-24">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-mh1 w-2/3 md:w-1/2 lg:w-3/5 font-semibold">
          Bowling Center
        </h1>
        <input
          className="border border-darkerBlue-100 rounded-m15 h-5 py-3 px-2 w-1/3 lg:w-2/5 md:w-1/2"
          type="search"
          name="search"
          id="searchDashboard"
          placeholder="Search..."
        />
      </div>
      <div className="flex flex-row flex-nowrap gap-2 snap-x py-2.5 overflow-x-auto md:gap-3.75 xl:gap-5">
        {(centers ?? []).map((center) => {
          return (
            <BowlingCenterCard
              key={center.id}
              bowlingCenterName={center.name}
              bowlingCenterID={center.id}
            />
          );
        })}
      </div>
    </section>
  );
}

export default BowlingCentersSection;
