import MainButton from "../../components/ui/MainButton";

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
          <div className="col-span-1 border-b border-b-darkerBlue-30 py-2">
            <span className="text-mh4">14:00</span>
          </div>
          <div className="col-span-3 border-b border-b-darkerBlue-30 py-2">
            <div className="rounded-m25 bg-white-100 shadow-mob flex flex-col justify-center items-center py-5 gap-2">
              <p className="text-mh3">6/12 Lanes booked</p>
              <MainButton buttonName="Book" variant="fill"/>
            </div>
          </div>
          <div className="col-span-1 border-b border-b-darkerBlue-30 py-2">
            <span className="text-mh4">15:00</span>
          </div>
          <div className="col-span-3 border-b border-b-darkerBlue-30 py-2">
            <div className="rounded-m25 bg-white-100 shadow-mob flex flex-col justify-center items-center py-5 gap-2">
              <p className="text-mh3">6/12 Lanes booked</p>
              <MainButton buttonName="Book" variant="fill"/>
            </div>
          </div>
          <div className="col-span-1 border-b border-b-darkerBlue-30 py-2">
            <span className="text-mh4">16:00</span>
          </div>
          <div className="col-span-3 border-b border-b-darkerBlue-30 py-2">
            <div className="rounded-m25 bg-white-100 shadow-mob flex flex-col justify-center items-center py-5 gap-2">
              <p className="text-mh3">6/12 Lanes booked</p>
              <MainButton buttonName="Book" variant="fill"/>
            </div>
          </div>
          <div className="col-span-1 border-b border-b-darkerBlue-30 py-2">
            <span className="text-mh4">17:00</span>
          </div>
          <div className="col-span-3 border-b border-b-darkerBlue-30 py-2">
            <div className="rounded-m25 bg-white-100 shadow-mob flex flex-col justify-center items-center py-5 gap-2">
              <p className="text-mh3">6/12 Lanes booked</p>
              <MainButton buttonName="Book" variant="fill"/>
            </div>
          </div>
          <div className="col-span-1 border-b border-b-darkerBlue-30 py-2">
            <span className="text-mh4">18:00</span>
          </div>
          <div className="col-span-3 border-b border-b-darkerBlue-30 py-2">
            <div className="rounded-m25 bg-white-100 shadow-mob flex flex-col justify-center items-center py-5 gap-2">
              <p className="text-mh3">6/12 Lanes booked</p>
              <MainButton buttonName="Book" variant="fill"/>
            </div>
          </div>
          <div className="col-span-1 border-b border-b-darkerBlue-30 py-2">
            <span className="text-mh4">19:00</span>
          </div>
          <div className="col-span-3 border-b border-b-darkerBlue-30 py-2">
            <div className="rounded-m25 bg-white-100 shadow-mob flex flex-col justify-center items-center py-5 gap-2">
              <p className="text-mh3">6/12 Lanes booked</p>
              <MainButton buttonName="Book" variant="fill"/>
            </div>
          </div>
          <div className="col-span-1 border-b border-b-darkerBlue-30 py-2">
            <span className="text-mh4">20:00</span>
          </div>
          <div className="col-span-3 border-b border-b-darkerBlue-30 py-2">
            <div className="rounded-m25 bg-white-100 shadow-mob flex flex-col justify-center items-center py-5 gap-2">
              <p className="text-mh3">6/12 Lanes booked</p>
              <MainButton buttonName="Book" variant="fill"/>
            </div>
          </div>
          <div className="col-span-1 border-b border-b-darkerBlue-30 py-2">
            <span className="text-mh4">21:00</span>
          </div>
          <div className="col-span-3 border-b border-b-darkerBlue-30 py-2">
            <div className="rounded-m25 bg-white-100 shadow-mob flex flex-col justify-center items-center py-5 gap-2">
              <p className="text-mh3">6/12 Lanes booked</p>
              <MainButton buttonName="Book" variant="fill"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BowlingCenterBookingTable;
