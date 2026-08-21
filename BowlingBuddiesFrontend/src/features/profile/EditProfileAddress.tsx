import InputField from "../../components/ui/InputField";
function EditProfileAddress() {
  return (
    <>
      <section className="grid grid-cols-4 bg-white-100 rounded-m30 shadow-mob p-5 gap-2 mt-5 lg:col-span-6 lg:mt-0 xxl:col-span-12">
        <div className="col-span-4">
          <span className="text-mh2 font-semibold">Address Info</span>
        </div>
        <div className="col-span-4">
          <InputField labelName="Address:" name="address" type="text" />
        </div>
        <div className="col-span-4">
          <InputField labelName="City:" name="city" type="text" />
        </div>
        <div className="col-span-2">
          <InputField labelName="Country:" name="country" type="text" />
        </div>
        <div className="col-span-2">
          <InputField labelName="Postal Code:" name="postcode" type="number" />
        </div>
        <div className="col-span-2">
          <InputField labelName="Address 2:" name="address2" type="text" />
        </div>
        <div className="col-span-2">
          <InputField labelName="State/Province:" name="state" type="text" />
        </div>
      </section>
    </>
  );
}

export default EditProfileAddress;
