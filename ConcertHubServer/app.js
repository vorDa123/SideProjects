const express = require("express");

const bodyParser = require("body-parser");

const concerts = require("./routes/concerts.js");

const cors = require('cors');

const app = express();

const port = process.env.PORT || 3000;

const allowedOrigins = [
  'http://localhost:5173',
  process.env.FRONTEND_URL
];

const corsOptions ={
    origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Nije dozvoljeno putem CORS-a'));
    }
  },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(concerts);

if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server radi na portu ${port}`);
  });
}


module.exports = app;
