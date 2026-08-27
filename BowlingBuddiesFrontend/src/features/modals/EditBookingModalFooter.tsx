import BiggerButton from "../../components/ui/BiggerButton.tsx";
import type { ModalProps } from "../../types";
function EditBookModalFooter(props: ModalProps) {
  return (
    <>
      <div className="col-span-5 mt-5 self-center">
        <div className="flex flex-col gap-2 md:flex-row-reverse lg:gap-5">
          <BiggerButton
            variant="fill"
            buttonName="SAVE"
            onClick={props.onClose}
          />
          <BiggerButton
            variant="no-fill"
            buttonName="CANCEL"
            onClick={props.onClose}
          />
        </div>
      </div>
      <div className="col-span-3 mt-5 self-end">
        <div className="text-center">
          <p>Price per person:</p>
          <p className="text-mh1 font-semibold">10 EUR</p>
          <p className="text-mdisclaimer md:text-tdisclaimer">
            Shoes not included in price
          </p>
        </div>
      </div>
    </>
  );
}

export default EditBookModalFooter;
