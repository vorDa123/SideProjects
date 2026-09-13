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
  const [isLoadingCenters, setIsLoadingCenters] = useState<boolean>(false);
  const [isLoadingFreeSlots, setIsLoadingFreeSlots] = useState<boolean>(false);
  const [isLoadingMyReservations, setIsLoadingMyReservations] =
    useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCenters = async () => {
    try {
      setIsLoadingCenters(true);
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
      setIsLoadingCenters(false);
    }
  };

  const fetchFreeSlots = async () => {
    try {
      setIsLoadingFreeSlots(true);
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
      setIsLoadingFreeSlots(false);
    }
  };

  const fetchMyReservations = async () => {
    try {
      setIsLoadingMyReservations(true);
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
      setIsLoadingMyReservations(false);
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
    isLoadingCenters,
    isLoadingFreeSlots,
    isLoadingMyReservations,
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
