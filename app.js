import express from "express";
import connectDB from "./db/connect.js";
const app = express();
import tasks from "./routes/tasks.js";

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/v1/tasks", tasks);

const port = 5000;
const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (e) {
    console.log(e);
  }
};

start();
