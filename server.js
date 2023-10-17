const express = require("express");
const dotenv = require("dotenv");
const { info } = require("./utils/logger.js");

// Load Env variables
dotenv.config({ path: "./config/conf.env" });

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  info(`Server running in ${process.env.NODE_ENV} Mode on Port ${PORT}`)
);
