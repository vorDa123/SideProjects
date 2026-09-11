import {
  MY_RESERVATIONS,
  JOIN_SLOT,
  FREE_SLOT,
  BOWLING_CENTERS,
} from "../data/mockData.ts";
import delay from "./asyncUtils.ts";

import type { BookingSlotData, UserData } from "../types/index.ts";

const originalMyReservations = MY_RESERVATIONS;

const getBowlingCentersHandler = async () => {
  await delay(3000);
  const bowlingCenters = BOWLING_CENTERS;

  console.log("Fetched centers:", bowlingCenters);
  return bowlingCenters;
};

const getNextFreeSlotHandler = async () => {
  await delay(3000);
  const freeSlotReservations = FREE_SLOT;

  console.log("Fetched free slots:", freeSlotReservations);
  return freeSlotReservations;
};

const getJoinSlotHandler = async () => {
  await delay(3000);
  const joinSlotReservations = JOIN_SLOT.map((item) => item).filter((item) => {
    return item.status === "free";
  });

  console.log("Original fetched join slots:", JOIN_SLOT);
  console.log(
    "Mapped original fetched join slots:",
    JOIN_SLOT.map((item) => item),
  );
  console.log("Filtered fetched join slots:", joinSlotReservations);

  return joinSlotReservations;
};

const getMyReservationsHandler = async () => {
  await delay(3000);

  console.log("Fetched my reservations:", originalMyReservations);
  return originalMyReservations;
};

const createReservationHandler = async (data: BookingSlotData) => {
  await delay(3000);

  const randomID = crypto.randomUUID();

  const newReservation: BookingSlotData = {
    ...data,
    id: randomID,
  };

  const reservationExists = originalMyReservations.some((item) => {
    return randomID === item.id;
  });

  if (!data) return originalMyReservations;

  if (reservationExists) {
    throw new Error("Reservation already exists");
  }
  console.log("Original reservation before append:", originalMyReservations);
  console.log("Added reservation:", newReservation);
  originalMyReservations.push(newReservation);
  console.log("Original reservation after append:", originalMyReservations);

  return [...originalMyReservations];
};

const joinPlayerHandler = async (resId: string, player: UserData) => {
  await delay(3000);
  const freeJoinSlotReservations = JOIN_SLOT.map((item) => item).filter(
    (item) => {
      return item.status === "free";
    },
  );
  const reservation = freeJoinSlotReservations.find((item) => {
    return resId === item.id;
  });
  console.log("Original reservation:", reservation);

  if (!reservation) throw new Error("Reservation is not found");
  const foundPlayer = reservation.joinedPlayers?.find((item) => {
    return item.id === player.id;
  });
  console.log("Found player:", foundPlayer);
  const maxNumberOfPlayers = reservation.numberOfBookedLanes * 6;
  const numberOfJoinedPlayers = reservation.joinedPlayers?.length || 0;

  if (numberOfJoinedPlayers === maxNumberOfPlayers || foundPlayer) {
    if (numberOfJoinedPlayers === maxNumberOfPlayers) {
      reservation.status = "full";
    }
    throw new Error("Reservation is full or the player is already added");
  }

  reservation.joinedPlayers?.push(player);

  console.log("Updated reservation:", reservation);

  return reservation;
};

export {
  getNextFreeSlotHandler,
  getJoinSlotHandler,
  getMyReservationsHandler,
  getBowlingCentersHandler,
  createReservationHandler,
  joinPlayerHandler,
};
