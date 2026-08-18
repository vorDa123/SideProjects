import type { ButtonProps } from "../../types/index.ts";

function BiggerButton({ buttonName, variant, classList }: ButtonProps) {
  if (variant === "fill") {
    return (
      <>
        <button
          className={`text-mh1 h-14.75 w-full font-semibold bg-orange-100 py-2 px-8 rounded-m25 text-center cursor-pointer ${classList}`}
        >
          {buttonName}
        </button>
      </>
    );
  } else if (variant === "no-fill") {
    return (
      <>
        <button
          className={`border-orange-100 text-orange-100 border-2 h-14.75 w-full text-mh1 font-semibold py-2 px-8 rounded-m25 text-center cursor-pointer ${classList}`}
        >
          {buttonName}
        </button>
      </>
    );
  }
}

export default BiggerButton;
