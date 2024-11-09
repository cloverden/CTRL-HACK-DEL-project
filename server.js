const express = require('express')

const app = express()

// routing path
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000')
});