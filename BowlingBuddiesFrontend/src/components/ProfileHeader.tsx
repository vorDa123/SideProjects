import HeaderMob from "../components/Header.tsx";
import ProfileDetails from "../components/ProfileDetails.tsx";
function ProfileHeader() {
  return (
    <>
      <HeaderMob showLogo={false} />
      <ProfileDetails />
    </>
  );
}

export default ProfileHeader;
