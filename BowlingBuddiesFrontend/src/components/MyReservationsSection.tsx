import MyReservationCard from "./MyReservationCard.tsx";
import { NavLink } from "react-router";

function OpenJoinDashboard() {
  return (
    <>
      <section className="pt-2.5 pb-2.5 w-full md:col-span-3 lg:col-span-6 sxl:col-span-5 xl:col-span-5 xxl:col-span-8">
        <h1 className="text-mh1 font-semibold">My Reservations</h1>
        <div className="grid grid-cols-1 gap-3 pt-2">
          <MyReservationCard />
          <MyReservationCard />
          <MyReservationCard />
          <MyReservationCard />
          <MyReservationCard />
          <p className="text-mlinks text-right md:text-tlinks">
            <NavLink to="/">Show more {">"}</NavLink>
          </p>
        </div>
      </section>
    </>
  );
}

export default OpenJoinDashboard;
