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
    const { newListId } = req.params.listId;
    
    // Find task by taskId and update listId to new listId
    Task.findByIdAndUpdate(taskId, {listId: newListId});
}

exports.getAllTasksByListId = async (req, res) => {
    const { listId } = req.params.listId;

    const tasks = Task.find({listId:listId});
    res.send(tasks);

}

exports.getTask = async (req, res) => {
    const { taskId } = req.params.taskId;

    const task = Task.findById(taskId);
    res.send(task);
    
}

exports.updateTaskTitle = async (req, res) => {
    const { taskId } = req.params.taskId;
    const { newTitle } = req.body.title;

    // Find task by taskId and update title to new title
    Task.findByIdAndUpdate(taskId, {title: newTitle});
    
}

exports.updateTaskDescription = async (req, res) => {
    const { taskId } = req.params.taskId;
    const { newDesc } = req.body.description;

    // Find task by taskId and update description to new description
    Task.findByIdAndUpdate(taskId, {description: newDesc});
}


/* TODO: 
        Error handling
*/