import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}`;

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(MONGODB_URI, {
      dbName: DB_NAME
    });
    console.log(
      "\nMongoDB connected !! DB HOST: ",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.error("MongoDB connection FAILED:", error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
