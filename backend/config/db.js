const mongoose = require('mongoose');

const connectDB = async() => {

    try {

        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`MONGODB CONNECTED`.bgGreen.bold);

        
    } catch (err) {
        console.log(`MONGODB CONNECTION ERROR`.bgRed.bold);
        process.exit(1);
    }

}

module.exports = connectDB;