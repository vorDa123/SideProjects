import BowlingCenterBookingTableCard from "./BowlingCenterBookingTableCard";
import type { BowlingCenterDataProps } from "../../types";
import { useState } from "react";
import {
  dateIntoJulian,
  julianIntoDate,
  formatDate,
  getDayName,
} from "../../services/dateServices";

function BowlingCenterBookingTable(props: BowlingCenterDataProps) {
  const [today, setToday] = useState(() => new Date());
  const todayDay = getDayName(today.getDay());
  const dateFormatToDisplay = formatDate(today, "DD.MM.YYYY");

  const handleNextDay = () => {
    const julianToday = dateIntoJulian(today);
    const nextDayJulian = julianToday + 1;
    const nextDayDate = julianIntoDate(nextDayJulian);
    setToday(nextDayDate);
  };

  const handlePreviousDay = () => {
    const julianToday = dateIntoJulian(today);
    const previousDayJulian = julianToday - 1;
    const previousDayDate = julianIntoDate(previousDayJulian);
    setToday(previousDayDate);
  };
  return (
    <>
      <div className="mt-5 md:px-2 md:overflow-y-auto md:relative md:h-[70dvh] lg:h-[87dvh]">
        <h3 className="text-mh3 font-semibold md:text-th3">Book Slot</h3>
        <div className="grid grid-cols-4 mt-4">
          <div className="col-span-4 border-b border-b-darkerBlue-30 py-1 md:sticky md:top-0 md:bg-white md:z-10">
            <div className="flex flex-row justify-around items-center">
              <p
                className="text-mh1 cursor-pointer"
                onClick={handlePreviousDay}
              >
                {"<"}
              </p>
              <div className="text-center cursor-pointer">
                <p className="text-mh4">{todayDay}</p>
                <p className="text-darkerBlue-50">{dateFormatToDisplay}</p>
              </div>
              <p className="text-mh1 cursor-pointer" onClick={handleNextDay}>
                {">"}
              </p>
            </div>
          </div>
          <BowlingCenterBookingTableCard centerData={props.centerData} />
          <BowlingCenterBookingTableCard centerData={props.centerData} />
          <BowlingCenterBookingTableCard centerData={props.centerData} />
          <BowlingCenterBookingTableCard centerData={props.centerData} />
          <BowlingCenterBookingTableCard centerData={props.centerData} />
          <BowlingCenterBookingTableCard centerData={props.centerData} />
          <BowlingCenterBookingTableCard centerData={props.centerData} />
          <BowlingCenterBookingTableCard centerData={props.centerData} />
          <BowlingCenterBookingTableCard centerData={props.centerData} />
        </div>
      </div>
    </>
  );
}

export default BowlingCenterBookingTable;
