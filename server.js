const express = require('express'); // Import express
const cors = require('cors')
const app = express(); // Initialize express

app.use(express.json()) // Using json in server
app.use(cors({origin: '*'})) // allow to make requests from all origins

require('./db')(); // connect database


app.use('/', require('./router')); // Link router file with server

const PORT = process.env.PORT || 5000; // Port define

// For running the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});