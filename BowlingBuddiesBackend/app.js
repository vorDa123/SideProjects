const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/bbroutes.js");
const port = "3000";

const app = express();
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "OPTION", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(routes);

app.listen(port, () => {
  console.log("Server up on port: ", port);
});
