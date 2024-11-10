require("dotenv").config();
// require("./config/database").connect();
const express = require("express");
const path = require("path"); 

const app = express();

// Set up static file serving
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json());

// Logic goes here

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/landingpage.html')
});

app.get('/planning', (req, res) => {
    res.sendFile(__dirname + '/planning.html')
});

app.get('/shopping', (req,res) => {
    res.sendFile(__dirname + '/shopping.html')

}); 

module.exports = app;