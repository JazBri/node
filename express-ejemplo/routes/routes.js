module.exports = routes = app => {
  app.use("/tasks", require("./tasks")),
    app.use("/users", require("./users")),
    app.use("/tasksUsers", require("./tasksUsers"));
};
