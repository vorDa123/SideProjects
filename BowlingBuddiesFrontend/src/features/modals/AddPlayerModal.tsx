import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import BiggerButton from "../../components/ui/BiggerButton.tsx";

function AddPlayerModal() {
  return (
    <>
      <div className="z-50 bg-darkerBlue-60 h-dvh w-dvw fixed inset-0 pointer-events-none touch-none"></div>
      <div className="bg-white-100 mx-auto my-5 px-6 py-7 w-9/10 fixed top-0 left-0 right-0 z-60 rounded-m30 md:w-8/10 lg:w-6/10 xl:w-5/10 xxl:w-3/10 md:py-5 xl:py-5 mxl:py-10 xxl:py-5">
        <div className="overflow-y-auto h-full">
          <div className="grid grid-cols-8 gap-x-4 auto-rows-max">
            <div className="col-span-8">
              <div className="flex flex-row justify-between">
                <div>
                  <p className="text-mh1 font-semibold my-1">Add Player</p>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="text-mh1 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-8 mt-5 mb-1">
              <label htmlFor="friend" className="text-mh4">
                Choose a friend:
              </label>
              <br />
              <select
                name="friend"
                id=""
                className="h-11.25 border border-darkerBlue-100 rounded-m7 w-full px-2"
              >
                <option value="">-- Please choose a friend --</option>
                <option value="Lovro">Lovro</option>
                <option value="Ivana">Ivana</option>
                <option value="Anja">Anja</option>
              </select>
            </div>
            <div className="col-span-8 mt-7 mb-1">
              <label htmlFor="name" className="text-mh4">
                Name:
              </label>
              <input
                type="text"
                name="name"
                className="h-11.25 border border-darkerBlue-100 rounded-m7 w-full px-2"
              ></input>
            </div>
            <div className="col-span-8 mt-5 mb-1">
              <label htmlFor="email" className="text-mh4">
                E-mail:
              </label>
              <input
                type="email"
                name="email"
                className="h-11.25 border border-darkerBlue-100 rounded-m7 w-full px-2"
              ></input>
            </div>
            <div className="col-span-8 mt-5 mb-1">
              <label htmlFor="phone" className="text-mh4">
                Phone:
              </label>
              <input
                type="number"
                name="phone"
                className="h-11.25 border border-darkerBlue-100 rounded-m7 w-full px-2"
              ></input>
            </div>
            <div className="col-span-8 mt-7 mb-1">
              <div className="flex flex-row-reverse justify-between gap-4">
                <BiggerButton variant="fill" buttonName="ADD" />
                <BiggerButton variant="no-fill" buttonName="BACK" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPlayerModal;
