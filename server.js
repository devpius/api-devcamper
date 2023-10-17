const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const { info } = require("./utils/logger.js");

// Routes
const bootcampRoutes = require("./routes/bootcamps.js");

// Load Env variables
dotenv.config({ path: "./config/conf.env" });

const connectDB = require("./config/db.js");

const app = express();

//Middlewares
if (process.env.NODE_ENV) {
  app.use(morgan("dev"));
}
app.use(express.json());

// Mounting routers
app.use("/api/v1/bootcamps", bootcampRoutes);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    info(`Server running in ${process.env.NODE_ENV} Mode on Port ${PORT}`);
  });
};

startServer();

process.on("unhandledRejection", (err, promise) => {
  info(`Error: ${err.message}`);
});
