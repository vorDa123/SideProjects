const express = require("express");

const bodyParser = require("body-parser");

const concerts = require("./routes/concerts.js");

const app = express();

const port = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(concerts);

// app.use((req, res, next) => {

// })

app.listen(port);
