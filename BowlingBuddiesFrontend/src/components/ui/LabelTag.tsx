import type { LabelTagProps } from "../../types/index.ts";

function LabelTag({labelValue}: LabelTagProps) {
  return (
    <>
      <div className="bg-yellow-100 rounded-m12 px-2 py-1 md:pt-1 md:px-3 text-center md:rounded-m15">{labelValue}</div>
    </>
  );
}

export default LabelTag;
