import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import BiggerButton from "../../components/ui/BiggerButton.tsx";
import InputField from "../../components/ui/InputField";

import { useEffect } from "react";

import { createPortal } from "react-dom";

import type { ModalProps } from "../../types/index.ts";

function AddPlayerModal(props: ModalProps) {
  const handleCloseModal = (e: React.MouseEvent<Element>) => {
    e.stopPropagation();
    if (!props.onClose) return;
    props.onClose();
  };

  const closeModal = () => {
  props.onClose?.();
};

  useEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [props.isOpen]);

  if (!props.isOpen) return null;
  return createPortal(
    <>
      <div className="z-50 bg-darkerBlue-60 h-dvh w-dvw fixed inset-0 touch-none" onClick={handleCloseModal}></div>
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
                    className="text-mh1 cursor-pointer" onClick={handleCloseModal}
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
              <InputField name="name" type="text" labelName="Name:" />
            </div>
            <div className="col-span-8 mt-5 mb-1">
              <InputField name="email" type="email" labelName="Email:" />
            </div>
            <div className="col-span-8 mt-5 mb-1">
              <InputField name="phone" type="number" labelName="Phone:" />
            </div>
            <div className="col-span-8 mt-7 mb-1">
              <div className="flex flex-row-reverse justify-between gap-4">
                <BiggerButton variant="fill" buttonName="ADD" onClick={closeModal}/>
                <BiggerButton variant="no-fill" buttonName="BACK" onClick={closeModal}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
}

export default AddPlayerModal;
