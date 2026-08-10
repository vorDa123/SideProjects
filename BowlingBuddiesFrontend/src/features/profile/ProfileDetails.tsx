import UserImg from "../../assets/playerBowling.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
function ProfileDetails() {
  return (
    <>
      <div className="lg:flex lg:flex-row lg:gap-2 lg:items-center">
        <div className="lg:relative lg:top-4">
          <img
            src={UserImg}
            alt="user image"
            className="rounded-full border-6 border-white w-50 h-50 absolute left-1/2 top-8 transform -translate-x-1/2 lg:border-0 lg:w-30 lg:h-30 lg:relative lg:left-0 lg:translate-x-0 lg:top-0"
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="text-mh1 absolute left-[70%] top-49 transform translate-x-[-70%] md:left-[62%] md:translate-x-[-62%] lg:text-mh2 lg:relative lg:left-[90%] lg:-top-8"
          />
        </div>
        <div className="mt-25 lg:mt-0 text-center lg:text-start">
          <p className="text-mh3 font-medium lg:font-semibold lg:text-th4">Davor Kuharić</p>
          <p className="mt-2">davorkuharic1997@gmail.com</p>
          <p className="mt-2">Registered in BK Nomad</p>
        </div>
      </div>
    </>
  );
}

export default ProfileDetails;
