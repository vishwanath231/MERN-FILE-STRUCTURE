// importing
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const colors = require('colors');
const connectDB = require('./backend/config/db');


// config
dotenv.config({ path: './backend/config/config.env'});
const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Database connection
// connectDB();


// api router
app.use('/api/v1/app', require('./backend/routes/router'));


// listen
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running a ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.bgYellow.bold);
})