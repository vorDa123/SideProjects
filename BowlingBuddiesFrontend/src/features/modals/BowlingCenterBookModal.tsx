import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import MainButton from "../../components/ui/MainButton";

function BowlingCenterBookingModal() {
  return (
    <>
      <div className="z-50 bg-darkerBlue-60 h-dvh w-dvw fixed">
        <div className="bg-white-100 mx-auto my-5 px-6 py-10 w-9/10 h-[95dvh] rounded-m30 grid grid-cols-8 gap-x-4 auto-rows-min">
          <div className="col-span-8">
            <div className="flex flex-row justify-between">
              <div>
                <p className="text-mh3">Thursday, 14.05.2026</p>
                <p className="text-mh1 font-semibold my-1">West Bowling</p>
                <p>Zaprešićka 2, 10290, Jablanovec</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faCircleXmark} className="text-mh1" />
              </div>
            </div>
          </div>
          <div className="col-span-8 mt-5 mb-1">
            <label htmlFor="email" className="text-mh4">
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="h-11.25 border border-darkerBlue-100 rounded-m7 w-full px-2"
            ></input>
          </div>
          <div className="col-span-8 mt-1">
            <label htmlFor="phone" className="text-mh4">
              Phone:
            </label>
            <input
              type="number"
              name="phone"
              className="h-11.25 border border-darkerBlue-100 rounded-m7 w-full px-2"
            ></input>
          </div>
          <div className="col-span-8 mt-5">
            <p className="text-mh4">Time</p>
          </div>
          <div className="w-full col-span-2 bg-lighterBlue-100 text-white-100 text-mh3 h-17 rounded-m15 flex flex-col justify-center items-center cursor-pointer">
            <span>14:00</span>
          </div>
          <div className="w-full col-span-2 bg-lighterBlue-100 text-white-100 text-mh3 h-17 rounded-m15 flex flex-col justify-center items-center cursor-pointer">
            <span>14:00</span>
          </div>
          <div className="w-full col-span-2 bg-lighterBlue-100 text-white-100 text-mh3 h-17 rounded-m15 flex flex-col justify-center items-center cursor-pointer">
            <span>14:00</span>
          </div>
          <div className="w-full col-span-2 bg-lighterBlue-100 text-white-100 text-mh3 h-17 rounded-m15 flex flex-col justify-center items-center cursor-pointer">
            <span>14:00</span>
          </div>
          <div className="col-span-4 mt-5">
            <label htmlFor="duration" className="text-mh4">
              Duration {"(h)"}:
            </label>
            <input
              type="number"
              name="duration"
              className="h-11.25 border border-darkerBlue-100 rounded-m7 w-full px-2"
            ></input>
          </div>
          <div className="col-span-4 mt-5">
            <label htmlFor="duration" className="text-mh4">
              No. of players:
            </label>
            <input
              type="number"
              name="duration"
              className="h-11.25 border border-darkerBlue-100 rounded-m7 w-full px-2"
            ></input>
          </div>
          <div className="col-span-4 mt-5">
            <label htmlFor="shoes" className="text-mh4">
              Shoes needed?
            </label>
            <label className="inline-flex items-center cursor-pointer w-max">
              <input type="checkbox" className="sr-only peer" />

              <div className="w-11.25 h-11.25 bg-white border border-darkerBlue-100 rounded-m7 flex items-center justify-center transition-all peer-checked:bg-darkerBlue-100 peer-checked:[&>svg]:block">
                <svg
                  className="w-8 h-8 text-white-100 hidden"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </label>
          </div>
          <div className="col-span-4 mt-5">
            <label htmlFor="resType" className="text-mh4">
              Type of reservation:
            </label>
            <input
              type="text"
              name="resType"
              className="h-11.25 border border-darkerBlue-100 rounded-m7 w-full px-2"
            ></input>
          </div>
          <div className="col-span-4 mt-5">
            <label htmlFor="shoes" className="text-mh4">
              Open join?
            </label>
            <br />
            <label className="inline-flex items-center cursor-pointer w-max">
              <input type="checkbox" className="sr-only peer" />

              <div className="w-11.25 h-11.25 bg-white border border-darkerBlue-100 rounded-m7 flex items-center justify-center transition-all peer-checked:bg-darkerBlue-100 peer-checked:[&>svg]:block">
                <svg
                  className="w-8 h-8 text-white-100 hidden"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </label>
          </div>
          <div className="col-span-5 mt-5 self-center justify-self-end">
            <MainButton variant="fill" buttonName="BOOK" />
          </div>
          <div className="col-span-3 mt-5">
            <div className="text-center">
              <p>Price per person:</p>
              <p className="text-mh1 font-semibold">10 EUR</p>
              <p className="text-mdisclaimer">Shoes not included in price</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BowlingCenterBookingModal;
