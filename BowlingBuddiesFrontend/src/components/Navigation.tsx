import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

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
          <FontAwesomeIcon icon="fa-solid fa-house" />
        </NavLink>
        <NavLink to="/bowlingalleys">
          <FontAwesomeIcon icon="fa-solid fa-bowling-ball" />
        </NavLink>
        <NavLink to="/openjoin">
          <FontAwesomeIcon icon="fa-solid fa-users" />
        </NavLink>
        <NavLink to="/profile">
          <FontAwesomeIcon icon="fa-solid fa-circle-user" />
        </NavLink>
      </nav>
    </>
  );
}

export default Navigation;
