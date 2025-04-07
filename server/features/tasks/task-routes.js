const express = require('express');
const router = express.Router();
const taskController = require('task-controller');

router.post('/', taskController.createTask);
router.delete('/:taskId', taskController.deleteTask);
router.patch('/:taskId/move/:listId', taskController.moveTask);
router.get('/list/:listId', taskController.getAllTasksByListId);
router.get('/:taskId', taskController.getTask);
router.patch('/title/:taskId', taskController.updateTaskTitle);
router.patch('/desc/:taskId', taskController.updateTaskDescription);

module.exports = router();