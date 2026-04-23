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

let removedConcerts = {
  removed: [],
};

let attendedConcerts = {
  attended: [],
};

let geolocationData = {
  geolocation: [],
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

    const events = response.data._embedded.events;

    const formattedEvents = events.map((event) => ({
      id: event?.id || "unknown",
      name: event?.name || "Concert Test",
      image: event?.images[0]?.url || "",
      date: event?.dates?.start?.localDate || "18.04.2026.",
      time: event?.dates?.start?.localTime || "16:00",
      dateTime: event?.dates?.start?.dateTime || "",
      genre: event?.classifications[0]?.genre?.name || "Heavy metal",
      venue: event?._embedded?.venues[0]?.name || "Venue test",
      city: event?._embedded?.venues[0]?.city?.name || "Zagreb",
      country: event?._embedded?.venues[0]?.country?.name || "Croatia",
      countryCode: event?._embedded?.venues[0]?.country?.countryCode || "HR",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor arcu at urna accumsan, a faucibus massa lobortis. Curabitur quis maximus nulla. Pellentesque mauris lorem, tincidunt at purus et, imperdiet scelerisque est. Aliquam erat volutpat. Fusce aliquam sem ut semper faucibus.",
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

router.get("/api/get-concert-by-location", async (req, res) => {
  try {
    const response = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=${APIKey}&latlong=${geolocationData.geolocation[0].lat},${geolocationData.geolocation[0].long}&radius=500&unit=km&locale=*&sort=date,asc&classificationName=Music`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const events = response.data._embedded.events;

    const formattedEvents = events.map((event) => ({
      id: event?.id,
      name: event?.name,
      image: event?.images[0]?.url,
      date: event?.dates?.start?.localDate,
      time: event?.dates?.start?.localTime,
      dateTime: event?.dates?.start?.dateTime,
      genre: event?.classifications[0]?.genre?.name,
      venue: event?._embedded?.venues[0]?.name,
      city: event?._embedded?.venues[0]?.city?.name,
      country: event?._embedded?.venues[0]?.country?.name,
      countryCode: event?._embedded?.venues[0]?.country?.countryCode,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor arcu at urna accumsan, a faucibus massa lobortis. Curabitur quis maximus nulla. Pellentesque mauris lorem, tincidunt at purus et, imperdiet scelerisque est. Aliquam erat volutpat. Fusce aliquam sem ut semper faucibus.",
    }));

    res.json(formattedEvents);
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
    dateTime: req.body.dateTime,
    genre: req.body.genre,
    venue: req.body.venue,
    city: req.body.city,
    country: req.body.country,
    countryCode: req.body.countryCode,
    description: req.body.description,
  });
  res.json(favoriteConcerts);
});

router.post("/api/add-to-attended", (req, res, next) => {
  try {
    attendedConcerts.attended.push({
      id: req.body.id,
      name: req.body.name,
      image: req.body.image,
      date: req.body.date,
      time: req.body.time,
      dateTime: req.body.dateTime,
      genre: req.body.genre,
      venue: req.body.venue,
      city: req.body.city,
      country: req.body.country,
      countryCode: req.body.countryCode,
      description: req.body.description,
    });
    res.json(attendedConcerts);
  } catch (error) {
    console.error(error.message);
  }
});

router.post("/api/send-geolocation-data", (req, res, next) => {
  try {
    geolocationData.geolocation.push({
      lat: req.body.lat,
      long: req.body.long,
    });
    res.json(geolocationData);
  } catch (error) {
    console.error(error.message);
  }
});

router.get("/api/get-attended", async (req, res) => {
  try {
    res.json(attendedConcerts.attended);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch attended" });
  }
});

router.get("/api/get-favourites", async (req, res) => {
  try {
    res.json(favoriteConcerts.favorites);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch favourites" });
  }
});

router.delete("/api/remove-from-favourite", (req, res, next) => {
  try {
    const idToRemove = req.body.id;
    const indexOfRemoved = favoriteConcerts.favorites.findIndex(
      (el) => el.id === idToRemove,
    );

    removedConcerts.removed = favoriteConcerts.favorites.splice(
      indexOfRemoved,
      1,
    );

    res.json(favoriteConcerts.favorites);
  } catch (error) {
    console.error(error.message);
  }
});

router.delete("/api/remove-from-attended", (req, res, next) => {
  try {
    const idToRemove = req.body.id;
    const indexOfRemoved = attendedConcerts.attended.findIndex(
      (el) => el.id === idToRemove,
    );

    removedConcerts.removed = attendedConcerts.attended.splice(
      indexOfRemoved,
      1,
    );

    res.json(attendedConcerts.attended);
  } catch (error) {
    console.error(error.message);
  }
});

router.patch("/api/update-attended-concert-data", (req, res, next) => {
  try {
    const idToUpdate = req.body.id;
    const indexOfUpdate = attendedConcerts.attended.findIndex(
      (el) => el.id === idToUpdate,
    );

    const concert = attendedConcerts.attended[indexOfUpdate];
    if (!concert) {
      return res.status(404).json({
        message: "Concert not found",
      });
    }
    const updates = req.body;
    for (let key in updates) {
      if (concert[key] !== undefined) {
        concert[key] = updates[key];
      }
    }
    res.json(attendedConcerts.attended);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
