import type { InputFieldProps } from "../../types/index.ts";

function InputField(props: InputFieldProps) {
  return (
    <>
      <label htmlFor={props.name} className="text-mh4">
        {props.labelName}
      </label>
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
