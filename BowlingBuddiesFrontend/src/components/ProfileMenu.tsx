import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";

import {
  faUser,
  faBell,
  faCircleInfo,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

function ProfileMenu() {
  return (
    <>
      <div className="flex flex-col items-center justify-around gap-10 mt-8">
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
    </>
  );
}

export default ProfileMenu;
