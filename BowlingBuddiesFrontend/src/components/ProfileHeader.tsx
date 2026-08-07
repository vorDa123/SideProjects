import HeaderMob from "../components/Header.tsx";
import UserImg from "../assets/playerBowling.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
function ProfileHeader() {
  return (
    <>
      <HeaderMob showLogo={false} />
      <img
        src={UserImg}
        alt="user image"
        className="rounded-full border-6 border-white w-50 h-50 absolute left-1/2 top-8 transform -translate-x-1/2"
      />
      <FontAwesomeIcon icon={faPenToSquare} className="text-mh1 absolute left-[70%] top-49 transform translate-x-[-70%]" />
      <p className="text-mh3 text-center mt-25 font-medium">Davor Kuharić</p>
      <p className="text-center mt-2">davorkuharic1997@gmail.com</p>
      <p className="text-center mt-2">Registered in BK Nomad</p>
    </>
  );
}

export default ProfileHeader;
