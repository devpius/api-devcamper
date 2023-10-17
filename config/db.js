const mongoose = require("mongoose");
const { info } = require("../utils/logger");

const connectDB = async (callBack) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    if (conn) {
      info(`Mongo Database connected:  ${conn.connection.host}`);
      if (typeof callBack === "function") {
        callBack();
      }
    }
  } catch (error) {
    info(error.message);
  }
};

module.exports = connectDB;
