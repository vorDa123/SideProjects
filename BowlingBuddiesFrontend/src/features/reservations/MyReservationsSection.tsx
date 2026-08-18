import MyReservationCard from "./MyReservationCard.tsx";
import { NavLink } from "react-router";

import type { MyReservationsProps } from "../../types/index.ts";

function MyReservations({ myReservationPage = false }: MyReservationsProps) {
  return (
    <>
      {myReservationPage ? (
        <section className="pt-2.5 pb-2.5 w-full md:col-span-2 lg:col-span-12 xxl:col-span-24">
          <h1 className="text-mh1 font-semibold">My Reservations</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 gap-3 pt-2">
            <MyReservationCard myReservationPage={true}/>
            <MyReservationCard myReservationPage={true}/>
            <MyReservationCard myReservationPage={true}/>
            <MyReservationCard myReservationPage={true}/>
            <MyReservationCard myReservationPage={true}/>
          </div>
        </section>
      ) : (
        <section className="pt-2.5 pb-2.5 w-full md:col-span-3 lg:col-span-6 mxl:col-span-5 xl:col-span-5 xxl:col-span-8">
          <h1 className="text-mh1 font-semibold">My Reservations</h1>
          <div className="grid grid-cols-1 gap-3 pt-2">
            <MyReservationCard />
            <MyReservationCard />
            <MyReservationCard />
            <MyReservationCard />
            <MyReservationCard />
            <p className="text-mlinks text-right md:text-tlinks">
              <NavLink to="/myreservations">Show more {">"}</NavLink>
            </p>
          </div>
        </section>
      )}
    </>
  );
}

export default MyReservations;
