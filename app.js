import express from "express";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import tasks from "./routes/tasks.js";
import notFound from "./middleware/not-found.js";
import asyncWrapper from "./middleware/async.js";

// middleware
app.use(express.json());
// serve static files
app.use(express.static("./public"));

// routes
app.use("/api/v1/tasks", tasks);

app.use(notFound);

const port = 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (e) {
    console.log(e);
  }
};

start();
