import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "../Routes/user.route.js";
import authRoutes from "../Routes/auth.route.js";
dotenv.config();

mongoose
  /* eslint-disable no-undef */
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => console.log(err));
const app = express();

app.use(express.json()); // api test garda we cant directly test json data, yo rakhesi allow garxa i.e allows json as a input

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

//middleware
app.use((err, req, res, next) => {
  const statuscode = err.statuscode || 500;
  const message = err.message || "Internal server occured";
  res.status(statuscode).json({ sucess: false, statuscode, message: message });
});
