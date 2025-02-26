const express = require('express');
const router = express.Router();
const { createTask, deleteTask, moveTask} = require('task-controller');

router.post('/tasks', createTask);
router.delete('/tasks/:taskId', deleteTask);
router.put('/tasks/:taskId/move/:listId', moveTask);

module.exports = router();