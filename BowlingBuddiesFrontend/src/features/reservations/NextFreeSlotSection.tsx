import NextFreeSlotCard from "./NextFreeSlotCard.tsx";
import { NavLink } from "react-router";

import type { NextFreeSlotProps } from "../../types/index.ts";

import { useBooking } from "../../hooks/useBooking.tsx";
import { useEffect } from "react";

function NextFreeSlotSection({ bowlingCenterPage = false }: NextFreeSlotProps) {
  const { freeSlots, fetchFreeSlots, isLoading } = useBooking();

  useEffect(() => {
    fetchFreeSlots!();
  }, []);
  return isLoading ? (
    <>
      {bowlingCenterPage ? (
        <section className="pt-2.5 pb-2.5 w-full md:col-span-2 lg:col-span-12 xxl:col-span-24">
          <div className="rounded-m15 w-1/2 h-8 bg-gray-400"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 gap-3 pt-2">
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
          </div>
        </section>
      ) : (
        <section className="pt-2.5 pb-2.5 w-full lg:col-span-6 xl:col-span-4 xxl:col-span-6">
          <div className="rounded-m15 w-1/2 h-8 bg-gray-400"></div>
          <div className="grid grid-cols-1 gap-3 pt-2">
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
            <p className="text-mlinks text-right md:text-tlinks">
              <NavLink to="/bowlingalleys">Show more {">"}</NavLink>
            </p>
          </div>
        </section>
      )}
    </>
  ) : (
    <>
      {bowlingCenterPage ? (
        <section className="pt-2.5 pb-2.5 w-full md:col-span-2 lg:col-span-12 xxl:col-span-24">
          <h1 className="text-mh1 font-semibold">Next Free Slot</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 gap-3 pt-2">
            {(freeSlots ?? []).map((slot) => {
              return <NextFreeSlotCard key={slot.id} />;
            })}
          </div>
        </section>
      ) : (
        <section className="pt-2.5 pb-2.5 w-full lg:col-span-6 xl:col-span-4 xxl:col-span-6">
          <h1 className="text-mh1 font-semibold">Next Free Slot</h1>
          <div className="grid grid-cols-1 gap-3 pt-2">
            {(freeSlots ?? [])
              .map((slot) => {
                return <NextFreeSlotCard key={slot.id} />;
              })
              .slice(0, 3)}
            <p className="text-mlinks text-right md:text-tlinks">
              <NavLink to="/bowlingalleys">Show more {">"}</NavLink>
            </p>
          </div>
        </section>
      )}
    </>
  );
}

export default NextFreeSlotSection;
