import InputField from "../../components/ui/InputField";
import type { EditProfileProps } from "../../types";
function EditProfileAddress(props: EditProfileProps) {
  return (
    <>
      <section className="grid grid-cols-4 bg-white-100 rounded-m30 shadow-mob p-5 gap-2 mt-5 lg:col-span-6 lg:mt-0 xxl:col-span-12">
        <div className="col-span-4">
          <span className="text-mh2 font-semibold">Address Info</span>
        </div>
        <div className="col-span-4">
          <InputField labelName="Address:" name="address" type="text" defaultValue={props.userData?.addressData?.address}/>
        </div>
        <div className="col-span-4">
          <InputField labelName="City:" name="city" type="text" defaultValue={props.userData?.addressData?.city}/>
        </div>
        <div className="col-span-2">
          <InputField labelName="Country:" name="country" type="text" defaultValue={props.userData?.addressData?.country}/>
        </div>
        <div className="col-span-2">
          <InputField labelName="Postal Code:" name="postcode" type="number" defaultValue={props.userData?.addressData?.postalCode}/>
        </div>
        <div className="col-span-2">
          <InputField labelName="Address 2:" name="address2" type="text" defaultValue={props.userData?.addressData?.address2}/>
        </div>
        <div className="col-span-2">
          <InputField labelName="State/Province:" name="state" type="text" defaultValue={props.userData?.addressData?.state}/>
        </div>
      </section>
    </>
  );
}

export default EditProfileAddress;
