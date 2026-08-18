import type { ButtonProps } from "../../types/index.ts";

function BiggerButton({ buttonName, variant, classList }: ButtonProps) {
  if (variant === "fill") {
    return (
      <>
        <button
          className={`text-mh1 h-14.75 w-47.5 font-semibold bg-orange-100 py-2 px-8 rounded-m25 text-center cursor-pointer hover:bg-orangeHover-100 focus:border-2 focus:border-darkerBlue-100 active:w-45 active:h-13 ${classList}`}
        >
          {buttonName}
        </button>
      </>
    );
  } else if (variant === "no-fill") {
    return (
      <>
        <button
          className={`border-orange-100 text-orange-100 border-2 h-14.75 w-47.5 text-mh1 font-semibold py-2 px-8 rounded-m25 text-center cursor-pointer hover:bg-orangeHover-100 focus:bg-orangeHover-100 focus:text-darkerBlue-100 focus:border-2 focus:border-darkerBlue-100 active:w-45 active:h-13 ${classList}`}
        >
          {buttonName}
        </button>
      </>
    );
  }
}

export default BiggerButton;
