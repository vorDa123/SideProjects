const express = require("express");

const bodyParser = require("body-parser");

const concerts = require("./routes/concerts.js");

const cors = require('cors');

const app = express();

const port = 3000;

const corsOptions ={
    origin:'http://localhost:5173', 
    methods: ["GET", "POST", "PUT", "DELETE", "OPTION"],
    allowedHeaders: ["Content-Type", "Authorization"]
}

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(concerts);


app.listen(port);
