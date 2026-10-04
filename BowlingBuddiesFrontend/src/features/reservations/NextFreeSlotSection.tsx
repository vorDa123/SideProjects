import NextFreeSlotCard from "./NextFreeSlotCard.tsx";
import { NavLink } from "react-router";

import type { NextFreeSlotProps } from "../../types/index.ts";

import { useBooking } from "../../hooks/useBooking.tsx";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function NextFreeSlotSection({ bowlingCenterPage = false }: NextFreeSlotProps) {
  const { freeSlots, fetchFreeSlots, isLoadingFreeSlots } = useBooking();
  const scopeRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    if (isLoadingFreeSlots || !scopeRef.current) return;
    gsap.fromTo(
      '.slot-card',
      { opacity: 0, y: 55, scale: 0.8 },
      { opacity: 1, y: 0, duration: 0.65, scale: 1, stagger: 0.2 },
    );
  }, {dependencies: [isLoadingFreeSlots], scope: scopeRef});

  useEffect(() => {
    fetchFreeSlots!();
  }, []);
  return isLoadingFreeSlots ? (
    <>
      {bowlingCenterPage ? (
        <section className="pt-2.5 pb-2.5 w-full md:col-span-2 lg:col-span-12 xxl:col-span-24">
          <div className="rounded-m15 w-1/2 h-8 bg-gray-400 animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 gap-3 pt-2">
            <div className="rounded-m15 w-full h-32.5 bg-gray-400 animate-pulse"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400 animate-pulse"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400 animate-pulse"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400 animate-pulse"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400 animate-pulse"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400 animate-pulse"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400 animate-pulse"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400 animate-pulse"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400 animate-pulse"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400 animate-pulse"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400 animate-pulse"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400 animate-pulse"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400 animate-pulse"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400 animate-pulse"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400 animate-pulse"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400 animate-pulse"></div>
          </div>
        </section>
      ) : (
        <section className="pt-2.5 pb-2.5 w-full lg:col-span-6 xl:col-span-4 xxl:col-span-6">
          <div className="rounded-m15 w-1/2 h-8 bg-gray-400 animate-pulse"></div>
          <div className="grid grid-cols-1 gap-3 pt-2">
            <div className="rounded-m15 w-full h-32.5 bg-gray-400 animate-pulse"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400 animate-pulse"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400 animate-pulse"></div>
            <div className="relative">
              <div className="rounded-m15 w-2/5 h-8 bg-gray-400 animate-pulse absolute right-0"></div>
            </div>
          </div>
        </section>
      )}
    </>
  ) : (
    <>
      {bowlingCenterPage ? (
        <section ref={scopeRef} className="pt-2.5 pb-2.5 w-full md:col-span-2 lg:col-span-12 xxl:col-span-24">
          <h1 className="text-mh1 font-semibold">Next Free Slot</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 gap-3 pt-2">
            {(freeSlots ?? []).map((slot) => {
              return <NextFreeSlotCard key={slot.id} freeSlotData={slot}/>;
            })}
          </div>
        </section>
      ) : (
        <section ref={scopeRef} className="pt-2.5 pb-2.5 w-full lg:col-span-6 xl:col-span-4 xxl:col-span-6">
          <h1 className="text-mh1 font-semibold">Next Free Slot</h1>
          <div className="grid grid-cols-1 gap-3 pt-2">
            {(freeSlots ?? [])
              .map((slot) => {
                return <NextFreeSlotCard key={slot.id} freeSlotData={slot}/>;
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
