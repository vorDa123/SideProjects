import type { BowlingCenterDataProps } from "../../types";
function BowlingCenterWorkingHoursTable(props: BowlingCenterDataProps) {
  return (
    <>
      {props.centerData ? (
        <div className="mt-5">
          <h3 className="text-mh3 font-medium md:text-th4">Working Hours</h3>
          <div className="grid grid-cols-7 grid-rows-1 text-center gap-x-2 mb-3 mt-2">
            <div className="bg-yellow-100 rounded-m5 shadow-mob py-1">Mon</div>
            <div className="bg-yellow-100 rounded-m5 shadow-mob py-1">Tue</div>
            <div className="bg-yellow-100 rounded-m5 shadow-mob py-1">Wed</div>
            <div className="bg-yellow-100 rounded-m5 shadow-mob py-1">Thu</div>
            <div className="bg-yellow-100 rounded-m5 shadow-mob py-1">Fri</div>
            <div className="bg-yellow-100 rounded-m5 shadow-mob py-1">Sat</div>
            <div className="bg-yellow-100 rounded-m5 shadow-mob py-1">Sun</div>
          </div>
          <div className="grid grid-cols-7 grid-rows-2 text-center gap-2">
            {props.centerData.workingInfo.monday.open === false ? (
              <div className="bg-white-100 row-span-2 align-middle rounded-m5 shadow-mob py-1">
                <span className="inline-block pt-4">X</span>
              </div>
            ) : (
              <div className="bg-white-100 align-middle rounded-m5 shadow-mob py-1">
                <span>{props.centerData.workingInfo.monday.startTime}</span>
              </div>
            )}
            {props.centerData.workingInfo.tuesday.open === false ? (
              <div className="bg-white-100 row-span-2 align-middle rounded-m5 shadow-mob py-1">
                <span className="inline-block pt-4">X</span>
              </div>
            ) : (
              <div className="bg-white-100 align-middle rounded-m5 shadow-mob py-1">
                <span>{props.centerData.workingInfo.tuesday.startTime}</span>
              </div>
            )}
            {props.centerData.workingInfo.wednesday.open === false ? (
              <div className="bg-white-100 row-span-2 align-middle rounded-m5 shadow-mob py-1">
                <span className="inline-block pt-4">X</span>
              </div>
            ) : (
              <div className="bg-white-100 align-middle rounded-m5 shadow-mob py-1">
                <span>{props.centerData.workingInfo.wednesday.startTime}</span>
              </div>
            )}
            {props.centerData.workingInfo.thursday.open === false ? (
              <div className="bg-white-100 row-span-2 align-middle rounded-m5 shadow-mob py-1">
                <span className="inline-block pt-4">X</span>
              </div>
            ) : (
              <div className="bg-white-100 align-middle rounded-m5 shadow-mob py-1">
                <span>{props.centerData.workingInfo.thursday.startTime}</span>
              </div>
            )}
            {props.centerData.workingInfo.friday.open === false ? (
              <div className="bg-white-100 row-span-2 align-middle rounded-m5 shadow-mob py-1">
                <span className="inline-block pt-4">X</span>
              </div>
            ) : (
              <div className="bg-white-100 align-middle rounded-m5 shadow-mob py-1">
                <span>{props.centerData.workingInfo.friday.startTime}</span>
              </div>
            )}
            {props.centerData.workingInfo.saturday.open === false ? (
              <div className="bg-white-100 row-span-2 align-middle rounded-m5 shadow-mob py-1">
                <span className="inline-block pt-4">X</span>
              </div>
            ) : (
              <div className="bg-white-100 align-middle rounded-m5 shadow-mob py-1">
                <span>{props.centerData.workingInfo.saturday.startTime}</span>
              </div>
            )}
            {props.centerData.workingInfo.sunday.open === false ? (
              <div className="bg-white-100 row-span-2 align-middle rounded-m5 shadow-mob py-1">
                <span className="inline-block pt-4">X</span>
              </div>
            ) : (
              <div className="bg-white-100 align-middle rounded-m5 shadow-mob py-1">
                <span>{props.centerData.workingInfo.sunday.startTime}</span>
              </div>
            )}
            {props.centerData.workingInfo.monday.open === true && (
              <div className="bg-white-100 align-middle rounded-m5 shadow-mob py-1">
                <span>{props.centerData.workingInfo.monday.endTime}</span>
              </div>
            )}
            {props.centerData.workingInfo.tuesday.open === true && (
              <div className="bg-white-100 align-middle rounded-m5 shadow-mob py-1">
                <span>{props.centerData.workingInfo.tuesday.endTime}</span>
              </div>
            )}
            {props.centerData.workingInfo.wednesday.open === true && (
              <div className="bg-white-100 align-middle rounded-m5 shadow-mob py-1">
                <span>{props.centerData.workingInfo.wednesday.endTime}</span>
              </div>
            )}
            {props.centerData.workingInfo.thursday.open === true && (
              <div className="bg-white-100 align-middle rounded-m5 shadow-mob py-1">
                <span>{props.centerData.workingInfo.thursday.endTime}</span>
              </div>
            )}
            {props.centerData.workingInfo.friday.open === true && (
              <div className="bg-white-100 align-middle rounded-m5 shadow-mob py-1">
                <span>{props.centerData.workingInfo.friday.endTime}</span>
              </div>
            )}
            {props.centerData.workingInfo.saturday.open === true && (
              <div className="bg-white-100 align-middle rounded-m5 shadow-mob py-1">
                <span>{props.centerData.workingInfo.saturday.endTime}</span>
              </div>
            )}
            {props.centerData.workingInfo.sunday.open === true && (
              <div className="bg-white-100 align-middle rounded-m5 shadow-mob py-1">
                <span>{props.centerData.workingInfo.sunday.endTime}</span>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="mt-5">
          <div className="bg-gray-400 rounded-m20 w-70 md:w-80 xl:w-120 h-7"></div>
          <div className="bg-gray-400 rounded-m20 w-full h-[20dvh] mt-2"></div>
        </div>
      )}
    </>
  );
}

export default BowlingCenterWorkingHoursTable;
