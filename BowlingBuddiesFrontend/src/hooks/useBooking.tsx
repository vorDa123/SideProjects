import { use } from "react";
import { BookingContext } from "../context/BookingContext";

export const useBooking = () => {
  const context = use(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingContextProvider");
  }
  return context;
};