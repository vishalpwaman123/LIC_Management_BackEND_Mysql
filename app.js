require("dotenv").config(); //.env file configuration
const express = require("express"); // Import Express Js library
const app = express(); // Create Object
const userRouter = require("./api/user/user.router"); // Import user.Router.js class
var cors = require("cors");

app.use(express.json()); //json Convert javascript object
app.use(cors());

app.use("/api/users", userRouter); //Go To user.Router.js Class

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and Running in Port Number", process.env.APP_PORT);
});
