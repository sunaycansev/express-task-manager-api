import express from "express";
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
app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});
