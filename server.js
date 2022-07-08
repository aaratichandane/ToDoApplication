const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config/config");
require("./config/db").connect();
const auth = require("./middleware/auth");
const port = config.config.PORT;

// Endpoint Routing
const api = require("./routes/api");
const authController =require("./controller/authController")

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/',(req, res)=>{
    res.send('Welcome to ToDo Application')
})

app.use("/api",auth, api);
app.use("/auth", authController);

app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
});
