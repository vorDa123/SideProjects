import BiggerButton from "../../components/ui/BiggerButton";
import { useNavigate } from "react-router";
function EditProfileFooter() {
  const navigate = useNavigate();
  const handleNavigateMyProfile = () => {
    navigate(`/myprofile`);
  };
  return (
    <>
      <div className="flex flex-row-reverse justify-between gap-2 my-5 md:col-span-2 md:justify-start lg:col-span-12 lg:mt-0 xxl:col-span-24">
        <BiggerButton buttonName="SAVE" variant="fill" />
        <BiggerButton buttonName="CANCEL" variant="no-fill" onClick={handleNavigateMyProfile}/>
      </div>
    </>
  );
}

export default EditProfileFooter;
