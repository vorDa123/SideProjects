import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import BiggerButton from "../../components/ui/BiggerButton.tsx";
import InputField from "../../components/ui/InputField";

import type { FormEvent } from "react";

import { useEffect, useRef } from "react";

import { createPortal } from "react-dom";

import type { ModalProps } from "../../types/index.ts";
import { useBooking } from "../../hooks/useBooking.tsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function AddPlayerModal(props: ModalProps) {
  const { addPlayer } = useBooking();
  const modalRef = useRef<HTMLDivElement>(null);
  const handleCloseModal = (e: React.MouseEvent<Element>) => {
    e.stopPropagation();
    handleCloseAnimation()
  };

  const goBack = () => {
    props.onBack?.();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log("Data from form:", data)
    const reservationId =
      props.myReservationData?.id || props.freeSlotData?.id || "";
    const playerToAdd = {
      id: crypto.randomUUID(),
      personalData: {
        name: `${data.name}` || "",
        surname: "",
        gender: "",
        oib: "",
        dateOfBirth: "",
      },
      contactData: {
        email: `${data.email}` || "",
        phone: `${data.phone}` || "",
      },
      registeredData: {
        registeredPlayer: false,
        registeredClub: "",
      },
      addressData: {
        address: "",
        city: "",
        postalCode: "",
        country: "",
      },
      leader: false,
    };
    console.log("Res ID:", reservationId)
    await addPlayer!(reservationId, playerToAdd);
    props.onBack!();
  };
  const handleCloseAnimation = () => {
    if (!modalRef.current) {
      props.onClose?.();
      return;
    }
    gsap.to(modalRef.current, {
      y: -300,
      opacity: 0,
      onComplete: () => {
        props.onClose?.();
      },
    });
  };

  useGSAP(
    () => {
      if (!modalRef.current) return;
      gsap.fromTo(
        modalRef.current,
        { y: -300, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
      );
    },
    { dependencies: [props.isOpen] },
  );

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
      <div
        className="z-50 bg-darkerBlue-60 h-dvh w-dvw fixed inset-0 touch-none"
        onClick={handleCloseModal}
      ></div>
      <div ref={modalRef} className="bg-white-100 mx-auto my-5 px-6 py-7 w-9/10 fixed top-0 left-0 right-0 z-60 rounded-m30 md:w-8/10 lg:w-6/10 xl:w-5/10 xxl:w-3/10 md:py-5 xl:py-5 mxl:py-10 xxl:py-5">
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
                    onClick={handleCloseModal}
                  />
                </div>
              </div>
            </div>
            <form
              className="col-span-8 grid grid-cols-8 gap-x-4 auto-rows-max"
              onSubmit={handleSubmit}
            >
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
                  <BiggerButton type="submit" variant="fill" buttonName="ADD" />
                  <BiggerButton
                    variant="no-fill"
                    buttonName="BACK"
                    onClick={goBack}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
}

export default AddPlayerModal;
