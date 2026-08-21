import InputField from "../../components/ui/InputField";
function EditProfileRegisteredPlayer() {
  return (
    <>
      <section className="grid grid-cols-4 bg-white-100 rounded-m30 shadow-mob p-5 gap-2 mt-5 lg:col-span-6 lg:mt-0 xxl:col-span-12">
        <div className="col-span-4">
          <span className="text-mh2 font-semibold">Registered Player Info</span>
        </div>
        <div className="col-span-4">
          <InputField
            labelName="Bowling Club:"
            name="bowlingclub"
            type="text"
          />
        </div>
        <div className="col-span-4">
          <InputField
            labelName="Registered since:"
            name="registereddate"
            type="date"
          />
        </div>
      </section>
    </>
  );
}

export default EditProfileRegisteredPlayer;
