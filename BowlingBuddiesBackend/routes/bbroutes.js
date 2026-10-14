const express = require("express");
const {
  ALL_RESERVATIONS,
  BOWLING_CENTERS,
  ACHIEVEMENTS,
} = require("../data/mockData.js");
const router = express.Router();

const FREE_SLOTS = [];
const MY_RESERVATIONS = [];
const JOIN_SLOTS = [];

router.get("/api/get-all-reservations", (res) => {
  res.json(ALL_RESERVATIONS);
});

module.exports = router;
