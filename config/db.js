// ./config/db.js
const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/seconddb";

async function connectToDB() {
  try {
    // Connect (no deprecated options)
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected ✔");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    // helpful: if server not running you'll see ECONNREFUSED or server selection errors
    // Do not exit in dev if you want the server to keep running; uncomment if desired:
    // process.exit(1);
  }
}

module.exports=connectToDB;