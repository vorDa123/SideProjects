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
import Logo from "../../assets/BBLogo.svg";
import { use, useRef } from "react";
import { NavigationContext } from "../../context/NavigationContext.ts";
import { NavLink } from "react-router";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function WideNavigation() {
  const { toggleNavigation } = use(NavigationContext);
  const navRef = useRef<HTMLElement | null>(null);

  const { contextSafe } = useGSAP({ scope: navRef });

  const animationClose = contextSafe(() => {
    if (!navRef.current) return;
    const tl = gsap.timeline({
      onComplete: () => toggleNavigation(),
    });
    tl.to(".navText", { opacity: 0, duration: 0.1, ease: "power1.in" }).to(
      navRef.current,
      {
        width: "4.5rem",
        duration: 0.25,
        ease: "power1.in",
      },
    );
  });

  return (
    <>
      {/* Prosirena Navigacija */}
      <nav
        ref={navRef}
        className="hidden lg:block md:bg-lighterBlue-100 md:w-100 md:h-full md:fixed md:rounded-tr-t40 md:rounded-br-t40 md:text-white-100 md:z-10"
      >
        <div
          className="md:absolute md:-right-3 md:top-12 md:rounded-[50%] md:w-7 md:h-7 md:text-center md:bg-lighterBlue-95 mxl:top-12 lxl:top-14 cursor-pointer"
          onClick={animationClose}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className="navText md:flex md:flex-col md:justify-around md:ml-8 md:h-full">
          <div className="md:flex md:flex-row md:gap-2">
            <img src={Logo} width={48} height={76} />
            <p className="text-white-100 font-medium text-3xl w-30">
              Bowling Buddies
            </p>
          </div>
          <div className="md:flex md:flex-col md:text-th3 md:gap-8">
            <NavLink
              className="navText hover:bg-darkerBlue-100 py-2 px-2 rounded-tl-m15 rounded-bl-m15"
              to="/"
            >
              <div className="md:flex md:flex-row md:gap-6 md:items-center">
                <FontAwesomeIcon icon={faHouse} />
                <span>Dashboard</span>
              </div>
            </NavLink>
            <NavLink className="navText hover:bg-darkerBlue-100 py-2 px-2 rounded-tl-m15 rounded-bl-m15" to="/bowlingalleys">
              <div className="md:flex md:flex-row md:gap-6 md:items-center">
                <FontAwesomeIcon icon={faBowlingBall} />
                <span>Bowling Centers</span>
              </div>
            </NavLink>
            <NavLink className="navText hover:bg-darkerBlue-100 py-2 px-2 rounded-tl-m15 rounded-bl-m15" to="/openjoin">
              <div className="md:flex md:flex-row md:gap-6 md:items-center">
                <FontAwesomeIcon icon={faUsers} />
                <span>Open Join</span>
              </div>
            </NavLink>
            <NavLink className="navText hover:bg-darkerBlue-100 py-2 px-2 rounded-tl-m15 rounded-bl-m15" to="/">
              <div className="md:flex md:flex-row md:gap-6 md:items-center">
                <FontAwesomeIcon icon={faBell} />
                <span>Notifications</span>
              </div>
            </NavLink>
            <NavLink className="navText hover:bg-darkerBlue-100 py-2 px-2 rounded-tl-m15 rounded-bl-m15" to="/myprofile">
              <div className="md:flex md:flex-row md:gap-6 md:items-center">
                <FontAwesomeIcon icon={faCircleUser} />
                <span>My Profile</span>
              </div>
            </NavLink>
            <NavLink className="navText hover:bg-darkerBlue-100 py-2 px-2 rounded-tl-m15 rounded-bl-m15" to="/">
              <div className="md:flex md:flex-row md:gap-6 md:items-center">
                <FontAwesomeIcon icon={faCircleInfo} />
                <span>About Us</span>
              </div>
            </NavLink>
          </div>
          <NavLink to="/login" className="navText hover:bg-darkerBlue-100 py-2 px-2 rounded-tl-m15 rounded-bl-m15 md:text-th3">
            <div className="md:flex md:flex-row md:gap-6 md:items-center">
              <FontAwesomeIcon icon={faRightFromBracket} />
              <span className="">Log Out</span>
            </div>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default WideNavigation;
