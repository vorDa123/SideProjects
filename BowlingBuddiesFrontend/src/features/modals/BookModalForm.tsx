import InputField from "../../components/ui/InputField";
function BookModalForm() {
  return (
    <>
      <div className="col-span-8 mt-5 mb-1">
        <InputField name="email" type="email" labelName="Email:" />
      </div>
      <div className="col-span-8 mt-1">
        <InputField name="phone" type="number" labelName="Phone:" />        
      </div>
      <div className="col-span-8 mt-5">
        <p className="text-mh4">Time</p>
      </div>
      <div className="w-full col-span-2 bg-lighterBlue-100 text-white-100 text-mh3 h-17 rounded-m15 flex flex-col justify-center items-center cursor-pointer">
        <span>14:00</span>
      </div>
      <div className="w-full col-span-2 bg-lighterBlue-100 text-white-100 text-mh3 h-17 rounded-m15 flex flex-col justify-center items-center cursor-pointer">
        <span>14:15</span>
      </div>
      <div className="w-full col-span-2 bg-lighterBlue-100 text-white-100 text-mh3 h-17 rounded-m15 flex flex-col justify-center items-center cursor-pointer">
        <span>14:30</span>
      </div>
      <div className="w-full col-span-2 bg-lighterBlue-100 text-white-100 text-mh3 h-17 rounded-m15 flex flex-col justify-center items-center cursor-pointer">
        <span>14:45</span>
      </div>
      <div className="col-span-4 mt-5">
        <InputField name="duration" type="number" labelName="Duration (h):" />        
      </div>
      <div className="col-span-4 mt-5">
        <InputField name="players" type="number" labelName="No. of players:" />        
      </div>
      <div className="col-span-4 mt-5 md:col-span-2">
        <label htmlFor="shoes" className="text-mh4">
          Shoes needed?
        </label>
        <br />
        <label className="inline-flex items-center cursor-pointer w-max">
          <input type="checkbox" className="sr-only peer" />

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
          <input type="checkbox" className="sr-only peer" />

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
          <option value="">-- Please choose a friend --</option>
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
          <input type="checkbox" className="sr-only peer" />

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
