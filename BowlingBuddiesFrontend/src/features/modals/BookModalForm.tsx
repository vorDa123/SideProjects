import InputField from "../../components/ui/InputField";
import { useContext } from "react";
import { BookingFormContext } from "../../context/BookFormContext";
import type { ModalProps } from "../../types";

function BookModalForm(props: ModalProps) {
  const { isJoinClicked, toggleJoinClicked } = useContext(BookingFormContext);
  const time =
    props.myReservationData?.startTime ||
    props.freeSlotData?.startTime ||
    `${props.newReservationData?.startTime}:00`;
  const hourToDisplay = time.slice(0, 2);
  return (
    <>
      <div className="col-span-8 mt-5 mb-1">
        <InputField
          name="email"
          type="email"
          labelName="Email:"
          defaultValue={props.myReservationData?.email}
        />
      </div>
      <div className="col-span-8 mt-1">
        <InputField
          name="phone"
          type="number"
          labelName="Phone:"
          defaultValue={props.myReservationData?.phone}
        />
      </div>
      <div className="col-span-8 mt-5">
        <p className="text-mh4">Time</p>
      </div>
      <label className="col-span-2 rounded-m15 w-full bg-lighterBlue-100 text-white-100 text-mh3 h-17">
        <input
          name="time"
          type="checkbox"
          className="sr-only peer/full"
          defaultValue={`${hourToDisplay}:00`}
          defaultChecked={time === `${hourToDisplay}:00`}
        />
        <div className="h-full flex flex-col justify-center items-center cursor-pointer peer-checked/full:border-orange-100 peer-checked/full:border-4 peer-checked/full:rounded-m15">
          <span>{hourToDisplay}:00</span>
        </div>
      </label>
      <label className="col-span-2 rounded-m15 w-full bg-lighterBlue-100 text-white-100 text-mh3 h-17">
        <input
          name="time"
          type="checkbox"
          defaultValue={`${hourToDisplay}:15`}
          className="sr-only peer/fifteen"
          defaultChecked={time === `${hourToDisplay}:15`}
        />
        <div className="h-full flex flex-col justify-center items-center cursor-pointer peer-checked/fifteen:border-orange-100 peer-checked/fifteen:border-4 peer-checked/fifteen:rounded-m15">
          <span>{hourToDisplay}:15</span>
        </div>
      </label>
      <label className="col-span-2 rounded-m15 w-full bg-lighterBlue-100 text-white-100 text-mh3 h-17">
        <input
          name="time"
          type="checkbox"
          defaultValue={`${hourToDisplay}:30`}
          className="sr-only peer/half"
          defaultChecked={time === `${hourToDisplay}:30`}
        />
        <div className="h-full flex flex-col justify-center items-center cursor-pointer peer-checked/half:border-orange-100 peer-checked/half:border-4 peer-checked/half:rounded-m15">
          <span>{hourToDisplay}:30</span>
        </div>
      </label>
      <label className="col-span-2 rounded-m15 w-full bg-lighterBlue-100 text-white-100 text-mh3 h-17">
        <input
          name="time"
          type="checkbox"
          defaultValue={`${hourToDisplay}:45`}
          className="sr-only peer/fortyfive"
          defaultChecked={time === `${hourToDisplay}:45`}
        />
        <div className="h-full flex flex-col justify-center items-center cursor-pointer peer-checked/fortyfive:border-orange-100 peer-checked/fortyfive:border-4 peer-checked/fortyfive:rounded-m15">
          <span>{hourToDisplay}:45</span>
        </div>
      </label>
      <div className="col-span-4 mt-5">
        <InputField
          name="duration"
          type="number"
          labelName="Duration (h):"
          defaultValue={props.myReservationData?.duration}
        />
      </div>
      <div className="col-span-4 mt-5">
        <InputField
          name="players"
          type="number"
          labelName="No. of players:"
          defaultValue={props.myReservationData?.numberOfPlayers}
        />
      </div>
      <div className="col-span-4 mt-5 md:col-span-2">
        <label htmlFor="shoes" className="text-mh4">
          Shoes needed?
        </label>
        <br />
        <label className="inline-flex items-center cursor-pointer w-max">
          <input
            name="shoesNeeded"
            type="checkbox"
            className="sr-only peer"
            defaultChecked={props.myReservationData?.shoesNeeded}
          />

          <div className="w-11.25 h-11.25 bg-white-100 border border-darkerBlue-100 rounded-m7 flex items-center justify-center transition-all peer-checked:bg-white-100 peer-checked:[&>svg]:block">
            <svg
              className="w-8 h-8 text-darkerBlue-100 hidden"
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
      <div className="hidden md:block md:col-span-2 md:mt-5">
        <label htmlFor="shoes" className="text-mh4">
          Open join?
        </label>
        <br />
        <label className="inline-flex items-center cursor-pointer w-max">
          <input
            name="openJoin"
            type="checkbox"
            className="sr-only peer"
            defaultChecked={isJoinClicked}
            onChange={toggleJoinClicked}
          />

          <div className="w-11.25 h-11.25 bg-white-100 border border-darkerBlue-100 rounded-m7 flex items-center justify-center transition-all peer-checked:bg-white-100 peer-checked:[&>svg]:block">
            <svg
              className="w-8 h-8 text-darkerBlue-100 hidden"
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
        <select
          name="resType"
          id=""
          className="h-11.25 border border-darkerBlue-100 rounded-m7 w-full px-2"
        >
          <option value="">-- Please choose a reservation type --</option>
          <option value="Fun">Fun</option>
          <option value="Professional">Professional</option>
          <option value="Training">Training</option>
        </select>
      </div>
      <div className="col-span-4 mt-5 md:hidden">
        <label htmlFor="shoes" className="text-mh4">
          Open join?
        </label>
        <br />
        <label className="inline-flex items-center cursor-pointer w-max">
          <input
            name="openJoin"
            type="checkbox"
            className="sr-only peer"
            defaultChecked={isJoinClicked}
            onChange={toggleJoinClicked}
          />

          <div className="w-11.25 h-11.25 bg-white-100 border border-darkerBlue-100 rounded-m7 flex items-center justify-center transition-all peer-checked:bg-white-100 peer-checked:[&>svg]:block">
            <svg
              className="w-8 h-8 text-darkerBlue-100 hidden"
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
    </>
  );
}

export default BookModalForm;
