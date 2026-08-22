import { createContext } from "react";
import type { NavigationContextTypes } from "../types/index.ts";

export const NavigationContext = createContext<NavigationContextTypes>({
  isWideNavigation: false,
  toggleNavigation: () => {},
});
