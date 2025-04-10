const express = require("express");
const router = express.Router();

const taskRoutes = require("../features/tasks/task-routes"); 
const listRoutes = require("../features/lists/list-routes"); 

router.use("/tasks", taskRoutes); // Mounting the task router
router.use("/lists", listRoutes); // Mounting the list router

module.exports = router; // Exporting aggregated router for use in index.js