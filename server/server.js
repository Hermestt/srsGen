// Express
const express = require("express");
const app = express();
const port = 3001;
// CORS
const cors = require("cors");
// Mongoose dBConnection
const dbConnection = require("./database/databaseConnection");
// Passport
const passport = require("passport");
//Importing Routers
const authRouter = require("./routes/index");

// Initiate app with CORS and json parser.
app.use(cors());
app.use(express.json());

// Set Express Routers
app.use("/auth", authRouter);

// We have a pending connection to the url database running on Atlas. We now need to get notified if we connect successfully or if a connection error occurs:
dbConnection.on("Error", console.error.bind(console, "connection error:"));
dbConnection.once("open", function () {
  console.log("WEST SIDE CANNET!");
});

// Passport Initialization and Config
app.use(passport.initialize());
require("./validation/passport")(passport);

// App start to listen at port.
app.listen(port, () => {
  console.log(`I'm listening at port ${port}`);
});
