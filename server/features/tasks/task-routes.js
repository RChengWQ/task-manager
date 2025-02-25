const express = require('express');
const router = express.Router();
const { createTask, deleteTask, moveTask} = require('task-controller');

router.post('/', createTask);
router.delete('/taskId', deleteTask);
router.put('/taskId/move/listId', moveTask);

module.exports = router();