import HeaderMob from "../components/Header.tsx";
import UserImg from "../assets/playerBowling.jpg";
function ProfileHeader() {
  return (
    <>
      <HeaderMob showLogo={false} />
      <img
        src={UserImg}
        alt="user image"
        className="rounded-full border-6 border-white w-50 h-50 absolute left-1/2 top-1/35 transform -translate-x-1/2"
      />
      <p className="text-mh3 text-center mt-25 font-medium">Davor Kuharić</p>
    </>
  );
}

export default ProfileHeader;
