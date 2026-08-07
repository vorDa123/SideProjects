import HeaderMob from "../components/Header.tsx";
import Navigation from "../components/Navigation.tsx";
import UserImg from "../assets/playerBowling.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";

import {
  faUser,
  faBell,
  faCircleInfo,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

function Profile() {
  return (
    <>
      <div className="grid grid-cols-1 relative">
        <HeaderMob showLogo={false} />
        <img
          src={UserImg}
          alt="user image"
          className="rounded-full border-6 border-white w-50 h-50 absolute left-1/2 top-1/14 transform -translate-x-1/2"
        />
        <p className="text-mh3 text-center mt-20 font-medium">Davor Kuharić</p>
        <div className="flex flex-col items-center justify-around gap-10 mt-12">
          <NavLink to="/myprofile">
            <div className="bg-lighterBlue-100 h-15.5 w-70.5 rounded-m60 relative">
              <div className="flex flex-row gap-5 text-mh2 text-white-100 absolute left-1/6 top-1/3">
                <FontAwesomeIcon icon={faUser} />
                <p>My Profile</p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/">
            <div className="bg-lighterBlue-100 h-15.5 w-70.5 rounded-m60 relative">
              <div className="flex flex-row gap-5 text-mh2 text-white-100 absolute left-1/6 top-1/3">
                <FontAwesomeIcon icon={faBell} />
                <p>Notifications</p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/">
            <div className="bg-lighterBlue-100 h-15.5 w-70.5 rounded-m60 relative">
              <div className="flex flex-row gap-5 text-mh2 text-white-100 absolute left-1/6 top-1/3">
                <FontAwesomeIcon icon={faCircleInfo} />
                <p>About Us</p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/login">
            <div className="bg-lighterBlue-100 h-15.5 w-70.5 rounded-m60 relative">
              <div className="flex flex-row gap-5 text-mh2 text-white-100 absolute left-1/6 top-1/3">
                <FontAwesomeIcon icon={faRightFromBracket} />
                <p>Log out</p>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="lg:hidden">
          <Navigation />
        </div>
      </div>
    </>
  );
}

export default Profile;
