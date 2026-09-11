import { useState } from "react";
import { BookingContext } from "./BookingContext.tsx";
import type {
  BookingContextTypes,
  BookingSlotData,
  BowlingCenterData,
  NextSlotData,
  BookingProviderProps,
} from "../types/index.ts";
import {
  getBowlingCentersHandler,
  getNextFreeSlotHandler,
  getMyReservationsHandler,
  createReservationHandler,
} from "../services/bookingService.ts";

export function BookingContextProvider({ children }: BookingProviderProps) {
  const [centers, setCenters] = useState<BowlingCenterData[]>([]);
  const [freeSlots, setFreeSlots] = useState<NextSlotData[]>([]);
  const [myReservations, setMyReservations] = useState<BookingSlotData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCenters = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await getBowlingCentersHandler();
      setCenters(res);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const fetchFreeSlots = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await getNextFreeSlotHandler();
      setFreeSlots(res);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMyReservations = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await getMyReservationsHandler();
      setMyReservations(res);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const createNewReservation = async (data: BookingSlotData) => {
    try {
      await createReservationHandler(data);
      const res = await getMyReservationsHandler();
      setMyReservations(res);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  const value: BookingContextTypes = {
    isLoading,
    error,
    centers,
    freeSlots,
    myReservations,
    fetchCenters,
    fetchFreeSlots,
    fetchMyReservations,
    createReservation: createNewReservation,
  };

  return <BookingContext value={value}>{children}</BookingContext>;
}
