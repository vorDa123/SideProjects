import type { ButtonProps } from "../../types/index.ts";

function BiggerButton(props: ButtonProps) {
  if (props.variant === "fill") {
    return (
      <>
        <button
          className={props.classOverride ? props.classOverride : `text-mh1 h-14.75 w-47.5 font-semibold bg-orange-100 py-2 px-8 rounded-m25 text-center cursor-pointer hover:bg-orangeHover-100 focus:border-2 focus:border-darkerBlue-100 active:w-45 active:h-13 ${props.classAppend}`}
        >
          {props.buttonName}
        </button>
      </>
    );
  } else if (props.variant === "no-fill") {
    return (
      <>
        <button
          className={props.classOverride ? props.classOverride : `border-orange-100 text-orange-100 border-2 h-14.75 w-47.5 text-mh1 font-semibold py-2 px-8 rounded-m25 text-center cursor-pointer hover:bg-orangeHover-100 hover:text-darkerBlue-100 focus:bg-orangeHover-100 focus:text-darkerBlue-100 focus:border-2 focus:border-darkerBlue-100 active:w-45 active:h-13 ${props.classAppend}`}
        >
          {props.buttonName}
        </button>
      </>
    );
  }
}

export default BiggerButton;
