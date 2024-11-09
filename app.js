require("dotenv").config();
// require("./config/database").connect();
const express = require("express");

const app = express();

app.use(express.json());

// Logic goes here

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/landingpage.html')
});

module.exports = app;