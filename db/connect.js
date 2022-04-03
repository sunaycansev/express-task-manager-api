import mongoose from "mongoose";

export default async function connectDB(url) {
  return await mongoose.connect(url);
}
