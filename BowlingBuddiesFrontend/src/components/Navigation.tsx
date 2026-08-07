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
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/BBLogo.svg";

import { NavLink } from "react-router";
function Navigation() {
  return (
    <>
      {/* Mob navigacija */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md bg-lighterBlue-100 text-white-100 rounded-m25 flex flex-row justify-around items-center text-3xl py-2.5 z-50 lg:hidden">
        <NavLink to="/">
          <FontAwesomeIcon icon={faHouse} />
        </NavLink>
        <NavLink to="/bowlingalleys">
          <FontAwesomeIcon icon={faBowlingBall} />
        </NavLink>
        <NavLink to="/openjoin">
          <FontAwesomeIcon icon={faUsers} />
        </NavLink>
        <NavLink to="/profile">
          <FontAwesomeIcon icon={faCircleUser} />
        </NavLink>
      </nav>
      {/* Navigacija za sve ostale */}
      <nav className="hidden lg:block md:bg-lighterBlue-100 md:w-18 md:h-full md:fixed md:rounded-tr-t40 md:rounded-br-t40 md:text-white-100 md:z-10">
        <div className="md:absolute md:left-14 md:top-18 md:rounded-[50%] md:w-7 md:h-7 md:text-center md:bg-lighterBlue-100">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div className="md:flex md:flex-col md:justify-around md:items-center md:h-full">
          <img src={Logo} width={48} height={76} />
          <div className="md:flex md:flex-col md:text-th3 md:gap-8">
            <NavLink to="/">
              <FontAwesomeIcon icon={faHouse} />
            </NavLink>
            <NavLink to="/bowlingalleys">
              <FontAwesomeIcon icon={faBowlingBall} />
            </NavLink>
            <NavLink to="/openjoin">
              <FontAwesomeIcon icon={faUsers} />
            </NavLink>
            <NavLink to="/">
              <FontAwesomeIcon icon={faBell} />
            </NavLink>
            <NavLink to="/myprofile">
              <FontAwesomeIcon icon={faCircleUser} />
            </NavLink>
            <NavLink to="/">
              <FontAwesomeIcon icon={faCircleInfo} />
            </NavLink>
          </div>
          <NavLink to="/login" className="md:text-th3">
            <FontAwesomeIcon icon={faRightFromBracket} />
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
