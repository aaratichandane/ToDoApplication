const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config/config");
require("./config/db").connect();
const port = config.config.PORT;

// Endpoint Routing
const api = require("./routes/api");
const app = express();

app.use(cors());
app.use(bodyParser.json());

//Todo Routes
app.use("/api", api);

app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
});
