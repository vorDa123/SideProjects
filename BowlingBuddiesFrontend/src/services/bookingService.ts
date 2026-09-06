import {
  MY_RESERVATIONS,
  JOIN_SLOT,
  FREE_SLOT,
  BOWLING_CENTERS,
} from "../data/mockData.ts";
import delay from "./asyncUtils.ts";

const getBowlingCentersHandler = async () => {
  await delay(3000);
  const bowlingCenters = BOWLING_CENTERS;

  console.log("Fetched free slots:", bowlingCenters);
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
  const myReservations = MY_RESERVATIONS;

  console.log("Fetched my reservations:", myReservations);
  return myReservations;
};

export {
  getNextFreeSlotHandler,
  getJoinSlotHandler,
  getMyReservationsHandler,
  getBowlingCentersHandler,
};
