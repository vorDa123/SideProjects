import { createContext } from "react";
import type { BookingContextTypes } from "../types/index.ts";

export const BookingContext = createContext<BookingContextTypes | undefined>(
  undefined,
);
