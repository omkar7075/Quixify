
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("../config/database");
const Provider = require("../models/Provider");
const ServiceProvider = require("../models/ServiceProvider");
const providers = require("../data/providers");
const serviceProviders = require("../data/serviceproviders");

dotenv.config();
connectDB();

const importData = async () => {
  try {
    console.log("🗑️  Deleting old data...");
    await Provider.deleteMany();
    await ServiceProvider.deleteMany();

    console.log("📦 Inserting Providers...");
    await Provider.insertMany(providers);

    console.log("📦 Inserting Service Providers...");
    await ServiceProvider.insertMany(serviceProviders);

    console.log("✅ Data Imported Successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error with Data Import:", error);
    process.exit(1);
  }
};

importData();
