import type { ButtonProps } from "../../types/index.ts";

function MainButton({ buttonName, variant, classList }: ButtonProps) {
  if (variant === "fill") {
    return (
      <>
        <button
          className={`text-mh2 w-33.5 font-medium bg-orange-100 py-2 px-8 rounded-m25 text-center cursor-pointer ${classList}`}
        >
          {buttonName}
        </button>
      </>
    );
  } else if (variant === "no-fill") {
    return (
      <>
        <button
          className={`border-orange-100 text-orange-100 border-2 text-mh2 w-33.5 font-medium py-2 px-8 rounded-m25 text-center cursor-pointer ${classList}`}
        >
          {buttonName}
        </button>
      </>
    );
  }
}

export default MainButton;
