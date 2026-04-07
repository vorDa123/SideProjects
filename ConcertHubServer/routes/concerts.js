const express = require("express");
const axios = require("axios");

const router = express.Router();

require("dotenv").config();

const APIKey = process.env.APIKey;

const APISecret = process.env.APISecret;

const EuropeCountries = [
  "AL",
  "AD",
  "AT",
  "BY",
  "BE",
  "BA",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GI",
  "GR",
  "HU",
  "IS",
  "IE",
  "IT",
  "XK",
  "LV",
  "LI",
  "LT",
  "LU",
  "MT",
  "MD",
  "MC",
  "ME",
  "NL",
  "MK",
  "NO",
  "PL",
  "PT",
  "RO",
  "RU",
  "SM",
  "RS",
  "SK",
  "SI",
  "ES",
  "SE",
  "CH",
  "TR",
  "UA",
  "GB",
  "VA",
];

let favoriteConcerts = {
  favorites: [],
};

let filteredEvents = {};

// Get me all the concerts and filter only those in Europe
router.get("/api/get-concert-list", async (req, res) => {
  try {
    const response = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/events.json?size=50&apikey=${APIKey}&locale=*&sort=date,name,asc&classificationName=Music`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    console.log("Fetched data:", response.data);

    const events = response.data._embedded.events;

    const formattedEvents = events.map((event) => ({
      id: event?.id,
      name: event?.name,
      image: event?.images[0]?.url,
      date: event?.dates?.start?.localDate,
      time: event?.dates?.start?.localTime,
      genre: event?.classifications[0]?.genre?.name,
      venue: event?._embedded?.venues[0]?.name,
      city: event?._embedded?.venues[0]?.city?.name,
      country: event?._embedded?.venues[0]?.country?.name,
      countryCode: event?._embedded?.venues[0]?.country?.countryCode,
    }));

    filteredEvents = formattedEvents.filter((event) => {
      const country = event.countryCode;

      return EuropeCountries.includes(country);
    });

    res.json(filteredEvents);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch concerts" });
  }
});

router.post("/api/add-to-favourite", (req, res, next) => {
  favoriteConcerts.favorites.push({
    id: req.body.id,
    name: req.body.name,
    image: req.body.image,
    date: req.body.date,
    time: req.body.time,
    genre: req.body.genre,
    venue: req.body.venue,
    city: req.body.city,
    country: req.body.country,
    countryCode: req.body.countryCode,
  });
  res.json(favoriteConcerts);
});

router.get("/api/get-favourites", async (req, res) => {
  try {
    res.json(favoriteConcerts.favorites);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch favourites" });
  }
});

module.exports = router;
