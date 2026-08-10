import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBowlingBall,
  faUsers,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router";
function MobileNavigation() {
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
    </>
  );
}

export default MobileNavigation;
