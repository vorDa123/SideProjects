import type { BowlingCenterDataProps } from "../../types";
function BowlingCenterGeneralInfo(props: BowlingCenterDataProps) {
  return (
    <>
      {props.centerData ? (
        <div className="mt-5">
          <img
            src={props.centerData.img}
            alt="bowling center image"
            className="rounded-m20 shadow-mob"
          />
          <h1 className="text-mh1 mt-5 font-semibold">
            {props.centerData.name}
          </h1>
          <p className="mt-2">{props.centerData.location}</p>
          <p className="mt-2">{props.centerData.email}</p>
          <p className="mt-2">{props.centerData.phone}</p>
        </div>
      ) : (
        <div className="mt-5">
          <div className="bg-gray-400 rounded-m20 w-full h-[20dvh] xl:h-[45dvh]"></div>
          <div className="bg-gray-400 rounded-m20 w-50 h-7 mt-5 md:w-60 lg:w-80 xl:w-100"></div>
          <div className="bg-gray-400 rounded-m20 w-70 h-6 mt-2 md:w-80 lg:w-100 xl:w-120"></div>
          <div className="bg-gray-400 rounded-m20 w-30 h-6 mt-2 md:w-40 lg:w-60 xl:w-80"></div>
          <div className="bg-gray-400 rounded-m20 w-20 h-6 mt-2 md:w-30 lg:w-50 xl:w-70"></div>
        </div>
      )}
    </>
  );
}

export default BowlingCenterGeneralInfo;
