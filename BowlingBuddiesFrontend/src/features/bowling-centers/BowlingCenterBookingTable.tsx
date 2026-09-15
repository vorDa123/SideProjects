import BowlingCenterBookingTableCard from "./BowlingCenterBookingTableCard";
import type { BowlingCenterDataProps } from "../../types";
import { useState } from "react";
import { formatDateIntl, getDayNameIntl } from "../../services/dateServices";
import type { WorkingDaysData } from "../../types";

function BowlingCenterBookingTable(props: BowlingCenterDataProps) {
  const [today, setToday] = useState(() => new Date());
  const todayDay = getDayNameIntl(today);
  const dateFormatToDisplay = formatDateIntl(today);
  const todayDayLowerCase: keyof WorkingDaysData =
    todayDay.toLowerCase() as keyof WorkingDaysData;
  const todayClosed =
    props.centerData !== undefined &&
    props.centerData.workingInfo[todayDayLowerCase].open !== true;

  const handleNextDay = () => {
    setToday((prevDate) => {
      const next = new Date(prevDate);
      next.setDate(next.getDate() + 1);
      return next;
    });
  };

  const handlePreviousDay = () => {
    setToday((prevDate) => {
      const prev = new Date(prevDate);
      prev.setDate(prev.getDate() - 1);
      return prev;
    });
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
          {todayClosed ? (
            <p>Today the center is closed</p>
          ) : (
            <>
              <BowlingCenterBookingTableCard centerData={props.centerData} />
              <BowlingCenterBookingTableCard centerData={props.centerData} />
              <BowlingCenterBookingTableCard centerData={props.centerData} />
              <BowlingCenterBookingTableCard centerData={props.centerData} />
              <BowlingCenterBookingTableCard centerData={props.centerData} />
              <BowlingCenterBookingTableCard centerData={props.centerData} />
              <BowlingCenterBookingTableCard centerData={props.centerData} />
              <BowlingCenterBookingTableCard centerData={props.centerData} />
              <BowlingCenterBookingTableCard centerData={props.centerData} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default BowlingCenterBookingTable;
