import type { ButtonProps } from "../../types/index.ts";

function MainButton({ buttonName, variant, classList }: ButtonProps) {
  if (variant === "fill") {
    return (
      <>
        <button
          className={`text-mh2 w-33.5 font-semibold bg-orange-100 py-2 px-8 rounded-m25 text-center cursor-pointer hover:bg-orangeHover-100 focus:border-2 focus:border-darkerBlue-100 active:w-32 active:py-1 ${classList}`}
        >
          {buttonName}
        </button>
      </>
    );
  } else if (variant === "no-fill") {
    return (
      <>
        <button
          className={`border-orange-100 text-orange-100 border-2 text-mh2 w-33.5 font-semibold py-2 px-8 rounded-m25 text-center cursor-pointer hover:bg-orangeHover-100 hover:text-darkerBlue-100 focus:bg-orangeHover-100 focus:text-darkerBlue-100 focus:border-2 focus:border-darkerBlue-100 active:w-32 active:py-1 ${classList}`}
        >
          {buttonName}
        </button>
      </>
    );
  } else if (variant === "login") {
    return (
      <>
        <button
          className={`text-mh2 w-38 font-semibold bg-orange-100 py-2 px-8 rounded-m25 text-center cursor-pointer hover:bg-orangeHover-100 focus:border-2 focus:border-darkerBlue-100 active:w-37 active:py-1 ${classList}`}
        >
          {buttonName}
        </button>
      </>
    );
  } else if (variant === "register") {
    return (
      <>
        <button
          className={`text-mh2 w-40 font-semibold bg-orange-100 py-2 px-8 rounded-m25 text-center cursor-pointer hover:bg-orangeHover-100 focus:border-2 focus:border-darkerBlue-100 active:w-39 active:py-1 ${classList}`}
        >
          {buttonName}
        </button>
      </>
    );
  }
}

export default MainButton;
