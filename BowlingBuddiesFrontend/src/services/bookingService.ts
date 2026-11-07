import { ACHIEVEMENTS, ALL_RESERVATIONS } from "../data/mockData.ts";
import delay from "./asyncUtils.ts";
import axios from "axios";

import type { ReservationData, PlayerData } from "../types/index.ts";

// const getAllReservations = async () => {
//   try {
//     const res = await axios.get(
//       "http://localhost/BowlingBuddiesAPI/api/getAllReservations.php",
//     );
//     return res.data;
//   } catch (error) {
//     console.error("Server down ili error");
//   }
// };

const getBowlingCentersHandler = async () => {
  try {
    const res = await axios.get(
      "http://localhost/BowlingBuddiesAPI/api/getBowlingCenters.php",
    );
    return res.data;
  } catch (error) {
    console.error("Server down ili error");
  }
};

const getAllBookedSlots = async () => {
  try {
    const res = await axios.get(
      "http://localhost/BowlingBuddiesAPI/api/getAllReservations.php?reservationType=booked",
    );
    return res.data;
  } catch (error) {
    console.error("Server down ili error");
  }
};

const getReservation = async (id: string) => {
  try {
    const res = await axios.get(
      `http://localhost/BowlingBuddiesAPI/api/getAllReservations.php?reservationId=${id}`,
    );
    return res.data;
  } catch (error) {
    console.error("Server down ili error");
  }
};

const getAchievements = async () => {
  await delay(3000);
  return ACHIEVEMENTS;
};

const getNextFreeSlotHandler = async () => {
  try {
    const res = await axios.get(
      "http://localhost/BowlingBuddiesAPI/api/getAllReservations.php?reservationType=free",
    );
    return res.data;
  } catch (error) {
    console.error("Server down ili error");
  }
};

const getJoinSlotHandler = async () => {
  try {
    const res = await axios.get(
      "http://localhost/BowlingBuddiesAPI/api/getAllReservations.php?reservationType=join",
    );
    return res.data;
  } catch (error) {
    console.error("Server down ili error");
  }
};

const getMyReservationsHandler = async () => {
  try {
    const res = await axios.get(
      "http://localhost/BowlingBuddiesAPI/api/getAllReservations.php?reservationType=booked",
    );
    return res.data;
  } catch (error) {
    console.error("Server down ili error");
  }
};

const createReservationHandler = async (data: ReservationData) => {
  try {
    const res = await axios.post(
      "http://localhost/BowlingBuddiesAPI/api/createReservation.php",
      data,
    );
    return res.data;
  } catch (error) {
    console.error("Server down ili error");
  }
};

const addPlayerFunction = async (data: PlayerData) => {
  try {
    const res = await axios.patch(
      "http://localhost/BowlingBuddiesAPI/api/addPlayer.php",
      data,
    );
    return res.data;
  } catch (error) {
    console.error("Server down ili error");
  }
};

const joinPlayerHandler = async (resId: string, player: PlayerData) => {
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

const addPlayerHandler = async (resId: string, player: PlayerData) => {
  const reservation = await getReservation(resId);
  console.log("Found reservation:", reservation);
  if (!reservation) throw new Error("Reservation is not found");
  await addPlayerFunction(player);
  const updatedReservation = await getReservation(resId);
  return { ...updatedReservation };
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
