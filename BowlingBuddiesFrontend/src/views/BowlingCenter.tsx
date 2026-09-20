import Navigation from "../components/layouts/Navigation.tsx";
import HeaderMob from "../components/layouts/Header.tsx";
import BowlingCenterBookingTable from "../features/bowling-centers/BowlingCenterBookingTable.tsx";
import BowlingCenterWorkingHoursTable from "../features/bowling-centers/BowlingCenterWorkingHoursTable.tsx";
import BowlingCenterGeneralInfo from "../features/bowling-centers/BowlingCenterGeneralInfo.tsx";

import { useParams } from "react-router";
import { useBooking } from "../hooks/useBooking.tsx";
import { useEffect } from "react";

function BowlingCenter() {
  const params = useParams();
  const { centers, fetchCenters, allBookings, fetchAllBookings } = useBooking();

  useEffect(() => {
    fetchCenters!();
    fetchAllBookings!();
  }, []);
  const bowlingCenterData = centers?.find((center) => {
    return center.id === params.id;
  });
  return (
    <>
      <div className="grid grid-cols-1">
        <HeaderMob />
        <div className="hidden lg:block">
          <Navigation />
        </div>
        <main className="w-full max-w-4xl mx-auto px-6 sm:px-6 lg:max-w-4xl lg:mx-25 xl:max-w-6xl mxl:max-w-7hxl mxl:mx-25 lxl:mx-50 xxl:max-w-9xl">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 lg:grid-cols-12 lg:gap-8 xl:gap-x-6 mxl:gap-x-12 xxl:grid-cols-24 xxl:gap-16">
            <div className="md:hidden">
              <BowlingCenterGeneralInfo centerData={bowlingCenterData!} />
              <BowlingCenterWorkingHoursTable centerData={bowlingCenterData!} />
              <BowlingCenterBookingTable centerData={bowlingCenterData!} allBookings={allBookings ?? []}/>
            </div>
            <div className="hidden md:block lg:col-span-6 xxl:col-span-12">
              <BowlingCenterGeneralInfo centerData={bowlingCenterData!} />
              <BowlingCenterWorkingHoursTable centerData={bowlingCenterData!} />
            </div>
            <div className="hidden md:block lg:col-span-6 xxl:col-span-12">
              <BowlingCenterBookingTable centerData={bowlingCenterData!} allBookings={allBookings ?? []}/>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br className="md:hidden" />
          <br className="md:hidden" />
          <div className="lg:hidden">
            <Navigation />
          </div>
        </main>
      </div>
    </>
  );
}

export default BowlingCenter;
