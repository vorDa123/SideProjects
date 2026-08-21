import type { InputFieldProps } from "../../types/index.ts";

function InputField(props: InputFieldProps) {
  return (
    <>
      <label
        htmlFor={props.name}
        className={
          props.labelClassOverride
            ? props.labelClassOverride
            : `text-mh4 ${props.labelClassAppend}`
        }
      >
        {props.labelName}
      </label>
      <br />
      <input
        type={props.type}
        name={props.name}
        className={
          props.classOverride
            ? props.classOverride
            : `h-11.25 border border-darkerBlue-100 rounded-m7 w-full px-2 ${props.classAppend}`
        }
      ></input>
    </>
  );
}

export default InputField;
