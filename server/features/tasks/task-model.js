const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    // Each task is linked to a list, depending on which stage it is on.
    listId: { type: mongoose.Schema.Types.ObjectId, ref: 'List', required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', taskSchema);