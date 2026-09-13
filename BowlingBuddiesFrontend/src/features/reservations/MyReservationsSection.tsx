import MyReservationCard from "./MyReservationCard.tsx";
import { NavLink } from "react-router";

import type { MyReservationsProps } from "../../types/index.ts";

import { useBooking } from "../../hooks/useBooking.tsx";
import { useEffect } from "react";

import { useNavigate } from "react-router";

function MyReservations({ myReservationPage = false }: MyReservationsProps) {
  const { myReservations, fetchMyReservations, isLoadingMyReservations } = useBooking();
  const navigate = useNavigate();
  const handleNavigateMyProfile = () => {
    navigate(`/myprofile`);
  };

  useEffect(() => {
    fetchMyReservations!();
  }, []);
  return isLoadingMyReservations ? (
    <>
      {myReservationPage ? (
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
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
          </div>
        </section>
      ) : (
        <section className="pt-2.5 pb-2.5 w-full md:col-span-3 lg:col-span-6 mxl:col-span-5 xl:col-span-5 xxl:col-span-8">
          <div className="rounded-m15 w-1/2 h-8 bg-gray-400"></div>
          <div className="grid grid-cols-1 gap-3 pt-2">
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
            <div className="rounded-m15 w-full h-32.5 bg-gray-400"></div>
            <p className="text-mlinks text-right md:text-tlinks">
              <NavLink to="/myreservations">Show more {">"}</NavLink>
            </p>
          </div>
        </section>
      )}
    </>
  ) : (
    <>
      {myReservationPage ? (
        <section className="pt-2.5 pb-2.5 w-full md:col-span-2 lg:col-span-12 xxl:col-span-24">
          <div className="text-mh1 font-semibold">
            <span
              className="text-darkerBlue-50 cursor-pointer"
              onClick={handleNavigateMyProfile}
            >
              My Profile
            </span>{" "}
            {">"}{" "}
            <span>My Reservations</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 gap-3 pt-2">
            {(myReservations ?? []).map((reservation) => {
              return (
                <MyReservationCard
                  key={reservation.id}
                  myReservationPage={true}
                  myReservationData={reservation}
                />
              );
            })}
          </div>
        </section>
      ) : (
        <section className="pt-2.5 pb-2.5 w-full md:col-span-3 lg:col-span-6 mxl:col-span-5 xl:col-span-5 xxl:col-span-8">
          <h1 className="text-mh1 font-semibold">My Reservations</h1>
          <div className="grid grid-cols-1 gap-3 pt-2">
            {(myReservations ?? [])
              .map((reservation) => {
                return (
                  <MyReservationCard
                    key={reservation.id}
                    myReservationData={reservation}
                  />
                );
              })
              .slice(0, 5)}
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
