const mongoose = require("mongoose");
require("dotenv").config(); // ✅ Ensure dotenv is loaded

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGODB_URL; // ✅ Corrected MONGO_URI to MONGO_URL
        if (!mongoURI) {
            throw new Error("MONGO_URI is not defined in .env file");
        }

        const conn = await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
