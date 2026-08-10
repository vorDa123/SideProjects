import HeaderMob from "../../components/layouts/Header.tsx";
import ProfileDetails from "./ProfileDetails.tsx";
function ProfileHeader() {
  return (
    <>
      <HeaderMob showLogo={false} />
      <ProfileDetails />
    </>
  );
}

export default ProfileHeader;
