const Task = require('task-model');

exports.createTask = async (req, res) => {
    const {title, description, listId} = req.body;

    Task.create({title, description, listId});
}

exports.deleteTask = async (req, res) => {
    const { taskId } = req.params;

    // Find task by taskId and delete the document
    Task.findByIdAndDelete(taskId);

}

exports.moveTask = async (req, res) => {
    const { taskId } = req.params.taskId;
    const { listId } = req.params.listId;
    
    // Find task by taskId and update listId to new listId
    Task.findByIdAndUpdate(taskId, {listId: listId});
}

/* TODO: 
        Error handling
        Find all tasks by listId
        Find 1 task by taskId
        Update task description
        Update task title*/