import JoinModalInfo from "./JoinModalInfo.tsx";
import JoinModalFooter from "./JoinModalFooter.tsx";
import JoinModalPlayers from "./JoinModalPlayers.tsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import { useEffect, useRef } from "react";

import { createPortal } from "react-dom";

import type { ModalProps } from "../../types/index.ts";
import { useBooking } from "../../hooks/useBooking.tsx";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function JoinModal(props: ModalProps) {
  const { joinPlayer } = useBooking();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = (e: React.MouseEvent<Element>) => {
    e.stopPropagation();
    handleCloseAnimation()
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

  const closeModal = async () => {
    const playerToAdd = {
      id: crypto.randomUUID(),
      personalData: {
        name: "Ivan",
        surname: "Ivić",
        gender: "M",
        oib: "",
        dateOfBirth: "",
      },
      contactData: {
        email: "test@mail.com",
        phone: "",
      },
      registeredData: {
        registeredPlayer: false,
        registeredClub: "",
      },
      addressData: {
        address: "Test ulica 1A",
        city: "Zagreb",
        postalCode: "10020",
        country: "Croatia",
      },
      leader: false,
    };
    await joinPlayer!(props.joinSlotData!.id!, playerToAdd);
    handleCloseAnimation()
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
      <div
        className="z-50 bg-darkerBlue-60 h-dvh w-dvw fixed inset-0 touch-none"
        onClick={handleCloseModal}
      ></div>
      <div ref={modalRef} className="bg-white-100 mx-auto my-5 w-9/10 h-[90dvh] fixed top-0 left-0 right-0 z-60 rounded-m30 md:w-8/10 md:h-[95dvh] lg:w-5/10 xl:w-4/10 xxl:w-3/10 xxl:h-[85dvh] flex flex-col overflow-hidden">
        <div className="shrink-0 col-span-8 bg-[url(/src/assets/playerBowling.jpg)] bg-center bg-cover w-full h-64">
          <div className="w-full h-full flex flex-col justify-between items-end">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="text-mh1 cursor-pointer mx-5 my-5 text-white-100"
              onClick={handleCloseModal}
            />
            <FontAwesomeIcon
              icon={faMapLocationDot}
              className="text-mh1 cursor-pointer mx-5 my-5 text-white-100"
            />
          </div>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto px-6 py-7 md:py-5 xl:py-5 mxl:py-10 xxl:py-5">
          <div className="grid grid-cols-8 gap-x-4 auto-rows-max">
            <JoinModalInfo joinSlotData={props.joinSlotData} />
            <JoinModalPlayers joinSlotData={props.joinSlotData} />
            <JoinModalFooter
              joinSlotData={props.joinSlotData}
              onClose={closeModal}
            />
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
}

export default JoinModal;
