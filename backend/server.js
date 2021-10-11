// importing
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const colors = require('colors');
const connectDB = require('./backend/config/db');


// config
dotenv.config({ path: 'backend/config/config.env'});
const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Database connection
// connectDB();


// api router
app.use('/api/v1/app', require('./routes/router'));


// HEROKU 
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/../frontend/build')));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, '/../frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}


// listen
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running a ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.bgYellow.bold);
})