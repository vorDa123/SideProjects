import AchievementsCard from "./AchievementsCard.tsx";
import type { MyProfileProps } from "../../types/index.ts";
import { useBooking } from "../../hooks/useBooking.tsx";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function AchievementsSection({ myProfilePage = false }: MyProfileProps) {
  const { achievements, fetchAchievements, isLoadingAchievements } =
    useBooking();
    const scopeRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    if (isLoadingAchievements || !scopeRef.current) return;
    gsap.fromTo(
      '.achievement-card',
      { opacity: 0, x: 55 },
      { opacity: 1, x: 0, duration: 0.65, stagger: 0.2 },
    );
  }, {dependencies: [isLoadingAchievements], scope: scopeRef});

  useEffect(() => {
    fetchAchievements!();
  }, []);
  return isLoadingAchievements ? (
    <section className="pt-2.5 pb-2.5 w-full md:col-span-2 lg:col-span-12 xl:col-span-4 xxl:col-span-12">
      <div className="rounded-m15 w-1/4 h-8 bg-gray-400 animate-pulse"></div>
      <div className="flex flex-row flex-nowrap gap-3 snap-x py-2.5 overflow-x-auto md:overflow-x-hidden md:gap-x-3.75 md:gap-y-3 md:flex-wrap mxl:gap-x-2 xxl:gap-x-7">
        <div className="snap-start shrink-0 w-19.75 h-19.75 bg-gray-400 rounded-m15 md:w-32.5 md:h-32.5 md:gap-3 animate-pulse"></div>
        <div className="snap-start shrink-0 w-19.75 h-19.75 bg-gray-400 rounded-m15 md:w-32.5 md:h-32.5 md:gap-3 animate-pulse"></div>
        <div className="snap-start shrink-0 w-19.75 h-19.75 bg-gray-400 rounded-m15 md:w-32.5 md:h-32.5 md:gap-3 animate-pulse"></div>
        <div className="snap-start shrink-0 w-19.75 h-19.75 bg-gray-400 rounded-m15 md:w-32.5 md:h-32.5 md:gap-3 animate-pulse"></div>
        <div className="snap-start shrink-0 w-19.75 h-19.75 bg-gray-400 rounded-m15 md:w-32.5 md:h-32.5 md:gap-3 animate-pulse"></div>
        <div className="snap-start shrink-0 w-19.75 h-19.75 bg-gray-400 rounded-m15 md:w-32.5 md:h-32.5 md:gap-3 animate-pulse"></div>
        <div className="snap-start shrink-0 w-19.75 h-19.75 bg-gray-400 rounded-m15 md:w-32.5 md:h-32.5 md:gap-3 animate-pulse"></div>
        <div className="snap-start shrink-0 w-19.75 h-19.75 bg-gray-400 rounded-m15 md:w-32.5 md:h-32.5 md:gap-3 animate-pulse"></div>
        <div className="snap-start shrink-0 w-19.75 h-19.75 bg-gray-400 rounded-m15 md:w-32.5 md:h-32.5 md:gap-3 animate-pulse"></div>
        <div className="snap-start shrink-0 w-19.75 h-19.75 bg-gray-400 rounded-m15 md:w-32.5 md:h-32.5 md:gap-3 animate-pulse"></div>
        <div className="snap-start shrink-0 w-19.75 h-19.75 bg-gray-400 rounded-m15 md:w-32.5 md:h-32.5 md:gap-3 animate-pulse"></div>
        <div className="snap-start shrink-0 w-19.75 h-19.75 bg-gray-400 rounded-m15 md:w-32.5 md:h-32.5 md:gap-3 animate-pulse"></div>
        <div className="snap-start shrink-0 w-19.75 h-19.75 bg-gray-400 rounded-m15 md:w-32.5 md:h-32.5 md:gap-3 animate-pulse"></div>
        <div className="snap-start shrink-0 w-19.75 h-19.75 bg-gray-400 rounded-m15 md:w-32.5 md:h-32.5 md:gap-3 animate-pulse"></div>
        <div className="snap-start shrink-0 w-19.75 h-19.75 bg-gray-400 rounded-m15 md:w-32.5 md:h-32.5 md:gap-3 animate-pulse"></div>
      </div>
    </section>
  ) : (
    <>
      {myProfilePage ? (
        <section ref={scopeRef} className="pt-2.5 pb-2.5 w-full md:col-span-2 lg:col-span-12 xl:col-span-4 xxl:col-span-12">
          <h1 className="text-mh1 font-semibold">Achievements</h1>
          <div className="flex flex-row flex-nowrap gap-3 snap-x py-2.5 overflow-x-auto md:overflow-x-hidden md:gap-x-3.75 md:gap-y-3 md:flex-wrap mxl:gap-x-2 xxl:gap-x-7">
            {achievements?.map((item) => {
              return <AchievementsCard key={item.id} achievementData={item} />;
            })}
          </div>
        </section>
      ) : (
        <section ref={scopeRef} className="pt-2.5 pb-2.5 w-full md:col-span-2 lg:col-span-12 xl:col-span-4 xxl:col-span-12">
          <h1 className="text-mh1 font-semibold">Achievements</h1>
          <div className="flex flex-row flex-nowrap gap-3 snap-x py-2.5 overflow-x-auto md:overflow-x-hidden md:gap-x-3.75 md:gap-y-3 md:flex-wrap mxl:gap-x-2 xxl:gap-x-7">
            {achievements?.map((item) => {
              return <AchievementsCard key={item.id} achievementData={item} />;
            })}
          </div>
        </section>
      )}
    </>
  );
}

export default AchievementsSection;
