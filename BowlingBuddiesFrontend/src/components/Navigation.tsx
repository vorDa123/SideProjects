import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBowlingBall,
  faUsers,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router";
function Navigation() {
  return (
    <>
      <nav
        className="mt-2.5 mb-5
                bg-lighterBlue-100
                text-white-100
                    rounded-m25
                    flex flex-row
                    justify-around
                    items-center
                    text-3xl
                    py-1.5
                    fixed
                    bottom-0
                    w-[87vw]"
      >
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

export default Navigation;
