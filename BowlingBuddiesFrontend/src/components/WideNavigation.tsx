import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBowlingBall,
  faUsers,
  faCircleUser,
  faBell,
  faCircleInfo,
  faRightFromBracket,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/BBLogo.svg";

import { NavLink } from "react-router";
function WideNavigation() {
  return (
    <>
      {/* Prosirena Navigacija */}
      <nav className="hidden md:bg-lighterBlue-95 md:w-100 md:h-full md:fixed md:rounded-tr-t40 md:rounded-br-t40 md:text-white-100 md:z-10">
        <div className="md:absolute md:left-95 md:top-18 md:rounded-[50%] md:w-7 md:h-7 md:text-center md:bg-lighterBlue-95 sxl:top-18 lxl:top-20">
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className="md:flex md:flex-col md:justify-around md:ml-8 md:h-full">
          <div className="md:flex md:flex-row md:gap-2">
            <img src={Logo} width={48} height={76} />
            <p className="text-white-100 font-medium text-3xl w-30">
              Bowling Buddies
            </p>
          </div>
          <div className="md:flex md:flex-col md:text-th3 md:gap-8">
            <NavLink to="/">
              <div className="md:flex md:flex-row md:gap-6 md:items-center">
                <FontAwesomeIcon icon={faHouse} />
                <span>Dashboard</span>
              </div>
            </NavLink>
            <NavLink to="/bowlingalleys">
              <div className="md:flex md:flex-row md:gap-6 md:items-center">
                <FontAwesomeIcon icon={faBowlingBall} />
                <span>Bowling Centers</span>
              </div>
            </NavLink>
            <NavLink to="/openjoin">
              <div className="md:flex md:flex-row md:gap-6 md:items-center">
                <FontAwesomeIcon icon={faUsers} />
                <span>Open Join</span>
              </div>
            </NavLink>
            <NavLink to="/">
              <div className="md:flex md:flex-row md:gap-6 md:items-center">
                <FontAwesomeIcon icon={faBell} />
                <span>Notifications</span>
              </div>
            </NavLink>
            <NavLink to="/myprofile">
              <div className="md:flex md:flex-row md:gap-6 md:items-center">
                <FontAwesomeIcon icon={faCircleUser} />
                <span>My Profile</span>
              </div>
            </NavLink>
            <NavLink to="/">
              <div className="md:flex md:flex-row md:gap-6 md:items-center">
                <FontAwesomeIcon icon={faCircleInfo} />
                <span>About Us</span>
              </div>
            </NavLink>
          </div>
          <NavLink to="/login" className="md:text-th3">
            <div className="md:flex md:flex-row md:gap-6 md:items-center">
              <FontAwesomeIcon icon={faRightFromBracket} />
              <span>Log Out</span>
            </div>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default WideNavigation;
