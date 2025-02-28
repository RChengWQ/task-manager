const express = require('express');
const router = express.Router();
const taskController = require('task-controller');

router.post('/tasks', taskController.createTask);
router.delete('/tasks/:taskId', taskController.deleteTask);
router.put('/tasks/:taskId/move/:listId', taskController.moveTask);
router.get('/tasks/list/:listId', taskController.getAllTasksByListId);
router.get('/tasks/:taskId', taskController.getTask);
router.put('/tasks/title/:taskId', taskController.updateTaskTitle);
router.put('/tasks/desc/:taskId', taskController.updateTaskDescription);

module.exports = router();