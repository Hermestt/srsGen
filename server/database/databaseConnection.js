// Env vars
require("dotenv").config();
const mongoose = require("mongoose");

// Make mongoose connection to database and keep it open.
const url = process.env.ATLAS_URI;
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

// Assignin the connection to dbConnetion so we can use it on server.js
const dbConnection = mongoose.connection;

module.exports = dbConnection;
/*
async function initDbConnection() {
  const client = new MongoClient(url);
  try {
    await client.connect();
    console.log("Connected correctly to server");
    return client;
  } catch (err) {
    await client.close();
    console.log(err.stack);
  }
}

module.exports = initDbConnection;

*/
