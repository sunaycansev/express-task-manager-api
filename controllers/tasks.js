export const getAllTasks = (req, res) => {
  res.send("all tasks");
};

export const createTask = (req, res) => {
  res.json({ success: true, data: req.body });
};

export const getSingleTask = (req, res) => {
  const { id } = req.params;
  res.json({ success: true, data: { id } });
};

export const updateTask = (req, res) => {
  res.send("update task");
};

export const deleteTask = (req, res) => {
  res.send("delete task");
};
