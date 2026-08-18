import BowlingCenterBookingTableCard from "./BowlingCenterBookingTableCard";

function BowlingCenterBookingTable() {
  return (
    <>
      <div className="mt-5 md:px-2 md:overflow-y-auto md:relative md:h-[70dvh] lg:h-[87dvh]">
        <h3 className="text-mh3 font-semibold md:text-th3">Book Slot</h3>
        <div className="grid grid-cols-4 mt-4">
          <div className="col-span-4 border-b border-b-darkerBlue-30 py-1 md:sticky md:top-0 md:bg-white md:z-10">
            <div className="flex flex-row justify-around items-center">
              <p className="text-mh1 cursor-pointer">{"<"}</p>
              <div className="text-center cursor-pointer">
                <p className="text-mh4">Thursday</p>
                <p className="text-darkerBlue-50">14.05.2026.</p>
              </div>
              <p className="text-mh1 cursor-pointer">{">"}</p>
            </div>
          </div>
          <BowlingCenterBookingTableCard bookingTime="14:00"/>
          <BowlingCenterBookingTableCard bookingTime="15:00"/>
          <BowlingCenterBookingTableCard bookingTime="16:00"/>
          <BowlingCenterBookingTableCard bookingTime="17:00"/>
          <BowlingCenterBookingTableCard bookingTime="18:00"/>
          <BowlingCenterBookingTableCard bookingTime="19:00"/>
          <BowlingCenterBookingTableCard bookingTime="20:00"/>
          <BowlingCenterBookingTableCard bookingTime="21:00"/>
          <BowlingCenterBookingTableCard bookingTime="22:00"/>
        </div>
      </div>
    </>
  );
}

export default BowlingCenterBookingTable;
