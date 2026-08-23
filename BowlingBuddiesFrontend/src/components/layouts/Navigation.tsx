import MobileNavigation from "./MobileNavigation.tsx";
import NarrowNavigation from "./NarrowNavigation.tsx";
import WideNavigation from "./WideNavigation.tsx";
import { useState } from "react";
import { NavigationContext } from "../../context/NavigationContext.ts";

function Navigation() {
  const [isWideNavigation, setIsWideNavigation] = useState<boolean>(false);

  const toggleNavigation = () => {
    setIsWideNavigation((prev) => !prev);
  };
  return (
    <>
      <MobileNavigation />
      <NavigationContext value={{ isWideNavigation, toggleNavigation }}>
        {isWideNavigation ? <WideNavigation /> : <NarrowNavigation />}
      </NavigationContext>
    </>
  );
}

export default Navigation;
