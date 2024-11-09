const express = require('express')
const ejs = require('ejs');

const app = express();



app.set('view engine', 'ejs');


// routing path
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/example.html')
});


// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000')
});