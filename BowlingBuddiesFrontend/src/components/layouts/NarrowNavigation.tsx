import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBowlingBall,
  faUsers,
  faCircleUser,
  faBell,
  faCircleInfo,
  faRightFromBracket,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/BBLogo.svg";
import { use, useRef } from "react";
import { NavigationContext } from "../../context/NavigationContext.ts";
import { NavLink } from "react-router";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
function NarrowNavigation() {
  const { toggleNavigation } = use(NavigationContext);
  const navRef = useRef<HTMLElement | null>(null);

  const { contextSafe } = useGSAP({ scope: navRef });

  const animationOpen = contextSafe(() => {
    if (!navRef.current) return;
    const tl = gsap.timeline({
      onComplete: () => toggleNavigation(),
    });
    tl.to(".navText", { opacity: 0, duration: 0.1, ease: "power1.in" }).to(
      navRef.current,
      {
        width: "25rem",
        duration: 0.3,
        ease: "power1.in",
      },
    );
  });

  return (
    <>
      {/* Navigacija za sve ostale */}
      <nav
        ref={navRef}
        className="hidden lg:block md:bg-lighterBlue-100 md:w-18 md:h-full md:fixed md:rounded-tr-t40 md:rounded-br-t40 md:text-white-100 md:z-10"
      >
        <div
          className="md:absolute md:-right-3 md:top-12 md:rounded-[50%] md:w-7 md:h-7 md:text-center md:bg-lighterBlue-100 mxl:top-12 lxl:top-14 cursor-pointer"
          onClick={animationOpen}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div className="md:flex md:flex-col md:justify-around md:items-center md:h-full">
          <img className="navText" src={Logo} width={48} height={76} />
          <div className="md:flex md:flex-col md:text-th3 md:gap-8">
            <NavLink className="navText hover:bg-darkerBlue-100 py-2 px-2 rounded-m15" to="/">
              <FontAwesomeIcon icon={faHouse} />
            </NavLink>
            <NavLink className="navText hover:bg-darkerBlue-100 py-2 px-2 rounded-m15" to="/bowlingalleys">
              <FontAwesomeIcon icon={faBowlingBall} />
            </NavLink>
            <NavLink className="navText hover:bg-darkerBlue-100 py-2 px-2 rounded-m15" to="/openjoin">
              <FontAwesomeIcon icon={faUsers} />
            </NavLink>
            <NavLink className="navText hover:bg-darkerBlue-100 py-2 px-2 rounded-m15" to="/">
              <FontAwesomeIcon icon={faBell} />
            </NavLink>
            <NavLink className="navText hover:bg-darkerBlue-100 py-2 px-2 rounded-m15" to="/myprofile">
              <FontAwesomeIcon icon={faCircleUser} />
            </NavLink>
            <NavLink className="navText hover:bg-darkerBlue-100 py-2 px-2 rounded-m15" to="/">
              <FontAwesomeIcon icon={faCircleInfo} />
            </NavLink>
          </div>
          <NavLink to="/login" className="navText hover:bg-darkerBlue-100 py-2 px-2 rounded-m15 md:text-th3">
            <FontAwesomeIcon icon={faRightFromBracket} />
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default NarrowNavigation;
