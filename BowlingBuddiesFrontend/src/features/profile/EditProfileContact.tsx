import InputField from "../../components/ui/InputField";
function EditProfileContact() {
  return (
    <>
      <section className="grid grid-cols-4 bg-white-100 rounded-m30 shadow-mob p-5 gap-2 mt-5 lg:col-span-6 lg:mt-0 xxl:col-span-12">
        <div className="col-span-4">
          <span className="text-mh2 font-semibold">Contact Info</span>
        </div>
        <div className="col-span-4">
          <InputField labelName="Email:" name="email" type="email" />
        </div>
        <div className="col-span-4">
          <InputField labelName="Phone:" name="phone" type="number" />
        </div>
      </section>
    </>
  );
}

export default EditProfileContact;
