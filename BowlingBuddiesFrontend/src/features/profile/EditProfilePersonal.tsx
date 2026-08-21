import InputField from "../../components/ui/InputField";
function EditProfilePersonal() {
  return (
    <>
      <section className="grid grid-cols-4 bg-white-100 rounded-m30 shadow-mob p-5 gap-2 mt-5 lg:col-span-6 lg:mt-0 xxl:col-span-12">
        <div className="col-span-4">
          <span className="text-mh2 font-semibold">Personal Info</span>
        </div>
        <div className="col-span-4">
          <InputField labelName="Name:" name="name" type="text" />
        </div>
        <div className="col-span-4">
          <InputField labelName="Surname:" name="surname" type="text" />
        </div>
        <div className="col-span-2">
          <InputField labelName="Gender:" name="gender" type="text" />
        </div>
        <div className="col-span-2">
          <InputField labelName="Date of Birth:" name="dob" type="date" />
        </div>
        <div className="col-span-2">
          <InputField
            labelName="Profile Image:"
            name="profileimage"
            type="file"
          />
        </div>
        <div className="col-span-2">
          <InputField labelName="OIB:" name="oib" type="number" />
        </div>
      </section>
    </>
  );
}

export default EditProfilePersonal;
