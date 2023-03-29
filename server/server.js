// use express js
const express = require("express");
const cors = require("cors");
// constructor ?
const app = express();
//set up env
require("dotenv").config({ path: "./config.env" });
// set up port
const port = process.env.PORT || 5000;
//
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

// get driver connection
const dbo = require("./db/conn");

// 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    // console err when have trouble connect
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});