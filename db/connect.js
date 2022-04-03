import mongoose from "mongoose";

const connecionString =
  "mongodb+srv://hexe137:18032002@cluster0.dfssm.mongodb.net/TaskManager?retryWrites=true&w=majority";

export default async function connectDB(url) {
  return await mongoose.connect(connecionString);
}
