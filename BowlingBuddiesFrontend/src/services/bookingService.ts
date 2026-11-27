import { ACHIEVEMENTS } from "../data/mockData.ts";
import delay from "./asyncUtils.ts";
import axios from "axios";

import type { ReservationData, PlayerData, UserData } from "../types/index.ts";

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
      "http://localhost/BowlingBuddiesAPI/api/getAllReservations.php?reservationType=booked,full",
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
      "http://localhost/BowlingBuddiesAPI/api/getAllReservations.php",
      { withCredentials: true },
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
      { withCredentials: true },
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

const joinPlayerFunction = async (data: PlayerData) => {
  try {
    const res = await axios.patch(
      "http://localhost/BowlingBuddiesAPI/api/joinPlayer.php",
      data,
    );
    return res.data;
  } catch (error) {
    console.error("Server down ili error");
  }
};

const joinPlayerHandler = async (resId: string, player: PlayerData) => {
  const reservation = await getReservation(resId);

  if (!reservation) throw new Error("Reservation is not found");
  await joinPlayerFunction(player);
  const updatedReservation = await getReservation(resId);
  return { ...updatedReservation };
};

const addPlayerHandler = async (resId: string, player: PlayerData) => {
  const reservation = await getReservation(resId);
  if (!reservation) throw new Error("Reservation is not found");
  await addPlayerFunction(player);
  const updatedReservation = await getReservation(resId);
  return { ...updatedReservation };
};

const updateUserDataHandler = async (userData: UserData) => {
  try {
    const res = await axios.patch(
      "http://localhost/BowlingBuddiesAPI/api/updateUserData.php",
      userData,
      { withCredentials: true },
    );
    return res.data;
  } catch (error) {
    console.error("Server down ili error");
  }
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
  updateUserDataHandler,
};
