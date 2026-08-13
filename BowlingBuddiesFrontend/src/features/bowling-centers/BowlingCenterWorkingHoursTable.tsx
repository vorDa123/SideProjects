function BowlingCenterWorkingHoursTable() {
  return (
    <>
      <div className="mt-5">
        <h3 className="text-mh3 font-medium md:text-th4">Working Hours</h3>
        <div className="grid grid-cols-7 grid-rows-1 text-center gap-x-2 mb-3 mt-2">
          <div className="bg-white-100 rounded-m5 shadow-mob py-1">Mon</div>
          <div className="bg-white-100 rounded-m5 shadow-mob py-1">Tue</div>
          <div className="bg-white-100 rounded-m5 shadow-mob py-1">Wed</div>
          <div className="bg-white-100 rounded-m5 shadow-mob py-1">Thu</div>
          <div className="bg-white-100 rounded-m5 shadow-mob py-1">Fri</div>
          <div className="bg-white-100 rounded-m5 shadow-mob py-1">Sat</div>
          <div className="bg-white-100 rounded-m5 shadow-mob py-1">Sun</div>
        </div>
        <div className="grid grid-cols-7 grid-rows-2 text-center gap-2">
          <div className="bg-white-100 row-span-2 align-middle rounded-m5 shadow-mob py-1">
            <span className="inline-block pt-4">X</span>
          </div>
          <div className="bg-white-100 align-middle rounded-m5 shadow-mob py-1">
            <span>14:02</span>
          </div>
          <div className="bg-white-100 align-middle rounded-m5 shadow-mob py-1">
            <span>14:02</span>
          </div>
          <div className="bg-white-100 align-middle rounded-m5 shadow-mob py-1">
            <span>14:03</span>
          </div>
          <div className="bg-white-100 align-middle rounded-m5 shadow-mob py-1">
            <span>14:02</span>
          </div>
          <div className="bg-white-100 align-middle rounded-m5 shadow-mob py-1">
            <span>14:04</span>
          </div>
          <div className="bg-white-100 align-middle rounded-m5 shadow-mob py-1">
            <span>14:02</span>
          </div>
          <div className="bg-white-100 align-middle rounded-m5 shadow-mob py-1">
            <span>23:05</span>
          </div>
          <div className="bg-white-100 align-middle rounded-m5 shadow-mob py-1">
            <span>23:05</span>
          </div>
          <div className="bg-white-100 align-middle rounded-m5 shadow-mob py-1">
            <span>23:05</span>
          </div>
          <div className="bg-white-100 align-middle rounded-m5 shadow-mob py-1">
            <span>23:06</span>
          </div>
          <div className="bg-white-100 align-middle rounded-m5 shadow-mob py-1">
            <span>23:05</span>
          </div>
          <div className="bg-white-100 align-middle rounded-m5 shadow-mob py-1">
            <span>23:07</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default BowlingCenterWorkingHoursTable;
