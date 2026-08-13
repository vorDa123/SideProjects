import type { ButtonProps } from "../../types/index.ts";

function MainButton({ buttonName, variant, classList }: ButtonProps) {
  if (variant === "fill") {
    return (
      <>
        <div
          className={`text-mh2 w-33.5 font-medium bg-orange-100 py-2 px-8 rounded-m25 text-center cursor-pointer ${classList}`}
        >
          {buttonName}
        </div>
      </>
    );
  } else if (variant === "no-fill") {
    return (
      <>
        <div
          className={`border-orange-100 text-orange-100 border-2 text-mh2 w-33.5 font-medium py-2 px-8 rounded-m25 text-center cursor-pointer ${classList}`}
        >
          {buttonName}
        </div>
      </>
    );
  }
}

export default MainButton;
