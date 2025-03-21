import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

 const MONGO_URI = process.env.MONGO_URI||"mongodb://localhost:27017/test";

export async function connectDB() {


  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
}

connectDB();



