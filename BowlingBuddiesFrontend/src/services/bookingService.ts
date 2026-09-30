import {
  BOWLING_CENTERS,
  ACHIEVEMENTS,
  ALL_RESERVATIONS,
} from "../data/mockData.ts";
import delay from "./asyncUtils.ts";

import type { ReservationData, UserData } from "../types/index.ts";

const getBowlingCentersHandler = async () => {
  await delay(3000);
  return BOWLING_CENTERS;
};

const getAllBookedSlots = async () => {
  await delay(3000);
  return ALL_RESERVATIONS.filter((item) => item.reservationType === "booked");
};

const getAchievements = async () => {
  await delay(3000);
  return ACHIEVEMENTS;
};

const getNextFreeSlotHandler = async () => {
  await delay(3000);
  return ALL_RESERVATIONS.filter((item) => item.reservationType === "free");
};

const getJoinSlotHandler = async () => {
  await delay(3000);
  return ALL_RESERVATIONS.filter((item) => item.reservationType === "join");
};

const getMyReservationsHandler = async () => {
  await delay(3000);
  return ALL_RESERVATIONS.filter((item) => item.reservationType === "booked");
};

const createReservationHandler = async (data: ReservationData) => {
  await delay(3000);

  const randomID = data.id || crypto.randomUUID();

  const newReservation: ReservationData = {
    ...data,
    id: randomID,
  };

  const reservationExists = ALL_RESERVATIONS.some(
    (item) => item.id === randomID,
  );

  if (reservationExists) {
    throw new Error("Reservation already exists");
  }
  ALL_RESERVATIONS.push(newReservation);

  return ALL_RESERVATIONS.filter((item) => item.reservationType === "booked");
};

const joinPlayerHandler = async (resId: string, player: UserData) => {
  await delay(1000);
  const reservation = ALL_RESERVATIONS.find((item) => item.id === resId);

  if (!reservation) throw new Error("Reservation is not found");
  const foundPlayer = reservation.joinedPlayers?.find((item) => {
    return item.id === player.id;
  });
  const numberOfBookedLanes = reservation.numberOfBookedLanes || 0;
  const maxNumberOfPlayers = numberOfBookedLanes * 6;
  const numberOfJoinedPlayers = reservation.joinedPlayers?.length || 0;

  if (numberOfJoinedPlayers === maxNumberOfPlayers || foundPlayer) {
    if (numberOfJoinedPlayers === maxNumberOfPlayers) {
      reservation.reservationType = "booked";
    }
    throw new Error("Reservation is full or the player is already added");
  }

  reservation.joinedPlayers?.push(player);
  reservation.numberOfPlayers = reservation.joinedPlayers?.length || 0;
  reservation.reservationType = "booked";

  return { ...reservation };
};

const addPlayerHandler = async (resId: string, player: UserData) => {
  const reservation = ALL_RESERVATIONS.find((item) => item.id === resId);
console.log("Found reservation:", reservation)
  if (!reservation) throw new Error("Reservation is not found");
  const updatedJoinedPlayers = [...(reservation.joinedPlayers || []), player];
  reservation.joinedPlayers = updatedJoinedPlayers;
  reservation.numberOfPlayers = updatedJoinedPlayers.length;

  return { ...reservation };
};

export {
  getNextFreeSlotHandler,
  getJoinSlotHandler,
  getMyReservationsHandler,
  getBowlingCentersHandler,
  createReservationHandler,
  joinPlayerHandler,
  getAchievements,
  getAllBookedSlots,
  addPlayerHandler,
};
