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

app.get('/cooking', (req, res) => {
    res.sendFile(__dirname + '/cooking.html')

});

app.get('/pantry', (req, res) => {
    res.sendFile(__dirname + '/pantry.html')

});

app.get('/shopping', (req, res) => {
    res.sendFile(__dirname + '/shopping.html')

});

app.get('/waste', (req, res) => {
    res.sendFile(__dirname + '/waste.html')

});

app.post('/signin', (req, res) => {
    let email = req.body.email
    console.log(email)

    // If pantry exists return contents to frontend, if it doesn't, create empty pantry and send to frontend
    const fs = require('fs');

    try {
        let path = `./pantries/${email}.json`
        if (fs.existsSync(path)) {
            console.log("Pantry exists!")
            // TODO return JSON

            // Read the JSON file
            fs.readFile(path, 'utf8', (err, data) => {
                if (err) {
                    console.error('Error reading file:', err);
                    return res.status(500).json({ error: 'Internal Server Error' });
                }

                // Parse the JSON data and send it as response
                try {
                    const jsonData = JSON.parse(data);
                    res.json(jsonData);
                } catch (parseErr) {
                    console.error('Error parsing JSON:', parseErr);
                    res.status(500).json({ error: 'Invalid JSON format' });
                }
            });

        } else {
            console.log("Pantry does not exist!")
            // TODO Create empty JSON and return
            let newPantry = {}

            fs.writeFile(path, JSON.stringify(newPantry), (err) => {
                if (err) {
                    console.error("error writing to file", err)
                } else {
                    console.log("JSON file has been created!")
                }
            })

            // Read the JSON file
            fs.readFile(path, 'utf8', (err, data) => {
                if (err) {
                    console.error('Error reading file:', err);
                    return res.status(500).json({ error: 'Internal Server Error' });
                }

                // Parse the JSON data and send it as response
                try {
                    const jsonData = JSON.parse(data);
                    res.json(jsonData);
                } catch (parseErr) {
                    console.error('Error parsing JSON:', parseErr);
                    res.status(500).json({ error: 'Invalid JSON format' });
                }
            });
        }
    } catch (err) {
        console.log(err)
    }
})

module.exports = app;