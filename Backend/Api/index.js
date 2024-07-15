import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  /* eslint-disable no-undef */
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => console.log(err));
const app = express();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
