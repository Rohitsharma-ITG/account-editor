// import { PrismaClient } from "@prisma/client";

// if (process.env.NODE_ENV !== "production") {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient();
//   }
// }

// const prisma = global.prisma || new PrismaClient();

// export default prisma;

import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

 const MONGO_URI = process.env.MONGO_URI||"mongodb://localhost:27017/Adminpanel";

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



