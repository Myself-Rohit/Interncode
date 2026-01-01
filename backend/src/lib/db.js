import mongoose from "mongoose";
import { ENV } from "./env.js";
export const connectDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    console.log("Database connected successfuly!");
  } catch (error) {
    console.error("Error connecting mongodb ", error);
  }
};
