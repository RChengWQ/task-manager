const express = require("express");
const router = express.Router();

const taskRoutes = require("../features/tasks/task-routes"); // Importing router

router.use("/tasks", taskRoutes); // Mounting the task router

module.exports = router; // Exporting aggregated router for use in index.js