//Create an express server
const express = require('express');
const app = express();

// Create a signup route
app.get('/status', (req, res) => {
    res.send('<h1>status</h1>');
});
// Create a singin post route
app.post('/signin', (req, res) => {
    res.send('<h1>Signin</h1>');
});
const port = process.env.PORT || 3000;
// Start the server
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
