import { createContext } from "react";
import type { BookingFormContextTypes } from "../types/index.ts";

export const BookingFormContext = createContext<BookingFormContextTypes>({
  isJoinClicked: false,
  toggleJoinClicked: () => {},
});
