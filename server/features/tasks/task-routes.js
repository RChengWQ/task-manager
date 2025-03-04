const express = require('express');
const router = express.Router();
const taskController = require('task-controller');

router.post('/', taskController.createTask);
router.delete('/:taskId', taskController.deleteTask);
router.put('/:taskId/move/:listId', taskController.moveTask);
router.get('/list/:listId', taskController.getAllTasksByListId);
router.get('/:taskId', taskController.getTask);
router.put('/title/:taskId', taskController.updateTaskTitle);
router.put('/desc/:taskId', taskController.updateTaskDescription);

module.exports = router();