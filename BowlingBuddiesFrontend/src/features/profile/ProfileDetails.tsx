import UserImg from "../../assets/playerBowling.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { useBooking } from "../../hooks/useBooking";

function ProfileDetails() {
  const navigate = useNavigate();
  const { user } = useBooking();
  const handleNavigateEditProfile = () => {
    navigate(`/editprofile`);
  };
  return (
    <>
      <div className="lg:flex lg:flex-row lg:gap-2 lg:items-center">
        <div className="-mt-20 relative flex justify-center items-center lg:mt-0">
          <img
            src={UserImg}
            alt="user image"
            className="rounded-full border-6 border-white w-50 h-50 transform lg:border-0 lg:w-30 lg:h-30 lg:relative lg:left-0 lg:translate-x-0 lg:top-0 cursor-pointer"
            onClick={handleNavigateEditProfile}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="text-mh1 absolute left-[70%] top-40 transform translate-x-[-70%] md:left-[62%] md:translate-x-[-62%] lg:text-mh2 lg:relative lg:left-[2%] lg:top-10 cursor-pointer"
            onClick={handleNavigateEditProfile}
          />
        </div>
        <div className="lg:mt-0 text-center lg:text-start">
          <p className="text-mh3 font-medium lg:font-semibold lg:text-th4">
            {user?.personalData?.name} {user?.personalData?.surname}
          </p>
          <p className="mt-2">{user?.contactData?.email}</p>
          {user?.registeredData?.registeredPlayer && (
            <p className="mt-2">
              Registered in {user?.registeredData?.registeredClub}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default ProfileDetails;
