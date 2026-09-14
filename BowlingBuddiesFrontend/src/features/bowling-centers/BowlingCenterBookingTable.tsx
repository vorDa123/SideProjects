import BowlingCenterBookingTableCard from "./BowlingCenterBookingTableCard";
import type { BowlingCenterDataProps } from "../../types";
import { useDayName } from "../../hooks/useDayName";
import { useDateFormat } from "../../hooks/useDateFormat";
import { useState } from "react";

function BowlingCenterBookingTable(props: BowlingCenterDataProps) {
  const todayDate = new Date();
  const [today, setToday] = useState(todayDate);
  const todayDay = useDayName(today.getDay());
  const dateFormatToDisplay = useDateFormat(today, "DD.MM.YYYY");

  const handleNextDay = () => {
    console.log("Today Date:", todayDate)
    const nextDay = Number(todayDate) + 1;
    console.log("Today Date Number:", Number(todayDate))
    console.log("Next Date Number:", nextDay)
    console.log("Next Date Date:", new Date(nextDay))
    setToday(new Date(nextDay));
  };

  const handlePreviousDay = () => {
    const previousDay = Number(todayDate) - 1;
    setToday(new Date(previousDay));
  };
  return (
    <>
      <div className="mt-5 md:px-2 md:overflow-y-auto md:relative md:h-[70dvh] lg:h-[87dvh]">
        <h3 className="text-mh3 font-semibold md:text-th3">Book Slot</h3>
        <div className="grid grid-cols-4 mt-4">
          <div className="col-span-4 border-b border-b-darkerBlue-30 py-1 md:sticky md:top-0 md:bg-white md:z-10">
            <div className="flex flex-row justify-around items-center">
              <p className="text-mh1 cursor-pointer" onClick={handlePreviousDay}>{"<"}</p>
              <div className="text-center cursor-pointer">
                <p className="text-mh4">{todayDay}</p>
                <p className="text-darkerBlue-50">{dateFormatToDisplay}</p>
              </div>
              <p className="text-mh1 cursor-pointer" onClick={handleNextDay}>{">"}</p>
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
