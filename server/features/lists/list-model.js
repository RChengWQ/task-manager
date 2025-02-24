const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    name: { type: String, required: true, enum: ['todo', 'in-progress', 'completed']},
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
});

module.exports = mongoose.model('List', listSchema);