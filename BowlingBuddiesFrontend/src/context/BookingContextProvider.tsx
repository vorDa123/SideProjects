import { useState } from "react";
import { BookingContext } from "./BookingContext.tsx";
import type {
  BookingContextTypes,
  BookingSlotData,
  BowlingCenterData,
  NextSlotData,
  BookingProviderProps,
  AchievementData,
  BookedSlotData,
  JoinData
} from "../types/index.ts";
import {
  getBowlingCentersHandler,
  getNextFreeSlotHandler,
  getMyReservationsHandler,
  createReservationHandler,
  getAchievements,
  getAllBookedSlots,
  getJoinSlotHandler
} from "../services/bookingService.ts";

export function BookingContextProvider({ children }: BookingProviderProps) {
  const [centers, setCenters] = useState<BowlingCenterData[]>([]);
  const [freeSlots, setFreeSlots] = useState<NextSlotData[]>([]);
  const [joinSlots, setJoinSlots] = useState<JoinData[]>([]);
  const [achievements, setAchievements] = useState<AchievementData[]>([]);
  const [allBookings, setAllBookings] = useState<BookedSlotData[]>([]);
  const [myReservations, setMyReservations] = useState<BookingSlotData[]>([]);
  const [isLoadingCenters, setIsLoadingCenters] = useState<boolean>(false);
  const [isLoadingFreeSlots, setIsLoadingFreeSlots] = useState<boolean>(false);
  const [isLoadingJoinSlots, setIsLoadingJoinSlots] = useState<boolean>(false);
  const [isLoadingAchievements, setIsLoadingAchievements] =
    useState<boolean>(false);
  const [isLoadingAllBookings, setIsLoadingAllBookings] =
    useState<boolean>(false);
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

  const fetchAllBookings = async () => {
    try {
      setIsLoadingAllBookings(true);
      setError(null);
      const res = await getAllBookedSlots();
      setAllBookings(res);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setIsLoadingAllBookings(false);
    }
  };

  const fetchAchievements = async () => {
    try {
      setIsLoadingAchievements(true);
      setError(null);
      const res = await getAchievements();
      setAchievements(res);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setIsLoadingAchievements(false);
    }
  };

  const fetchJoinSlots = async () => {
    try {
      setIsLoadingJoinSlots(true);
      setError(null);
      const res = await getJoinSlotHandler();
      setJoinSlots(res);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setIsLoadingJoinSlots(false);
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
    isLoadingAllBookings,
    isLoadingAchievements,
    isLoadingJoinSlots,
    error,
    centers,
    freeSlots,
    myReservations,
    allBookings,
    achievements,
    joinSlots,
    fetchJoinSlots,
    fetchCenters,
    fetchFreeSlots,
    fetchMyReservations,
    fetchAllBookings,
    fetchAchievements,
    createReservation: createNewReservation,
  };

  return <BookingContext value={value}>{children}</BookingContext>;
}
