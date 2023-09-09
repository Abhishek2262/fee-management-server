const express = require('express'); // Import express
const cors = require('cors')

const app = express(); // Initialize express

require('./db')();

app.use(express.json()) // Using json in server
app.use(cors())

app.use('/', require('./router')); // Link router file with server

const PORT = 5000; // Port define

// For running the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});