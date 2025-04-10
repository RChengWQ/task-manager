const express = require('express');
const router = express.Router();
const listController = require('./list-controller');

router.post('/', listController.createList);
router.get('/:listId', listController.getList);
router.patch('/title/:listId', listController.updateListTitle);
router.delete('/:listId', listController.deleteList);

module.exports = router;