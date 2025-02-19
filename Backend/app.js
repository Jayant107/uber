const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors")
const express = require("express");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    return res.send("This is a get route");
});

module.exports = app;