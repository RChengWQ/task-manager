const Task = require('./task-model');

exports.createTask = async (req, res) => {
    const {title, description, listId} = req.body;

    try{
        const task = await Task.create({title, description, listId});
        res.status(201).send(task);
    } catch(err){
        res.status(500).send({ error: 'Failed to create task' });
    }
    
}

exports.deleteTask = async (req, res) => {
    const { taskId } = req.params;

    try{
        // Find task by taskId and delete the document
        const task = await Task.findByIdAndDelete(taskId);
        if (!task) {
            return res.status(404).send({ error: 'Task not found' });
        }
        res.status(200).send({ message: 'Task deleted successfully' });
    } catch(err){
        res.status(500).send({ error: 'Failed to delete task' });
    }
    

}

exports.moveTask = async (req, res) => {
    const { taskId, listId } = req.params;
    
    try{
        // Find task by taskId and update listId to new listId
        // New is true so that modified doc is returned, rather than the original
        const task = await Task.findByIdAndUpdate(taskId, {listId: listId}, { new: true });
        if(!task){
            return res.status(404).send({ error: 'Task not found' });
        }
        res.status(200).send(task)
    } catch(err){
        res.status(500).send({ error: 'Failed to move task' });
    }
    
}

exports.getAllTasksByListId = async (req, res) => {
    const { listId } = req.params;

    try{
        const tasks = await Task.find({listId:listId});
        res.status(200).send(tasks);
    } catch(err){
        res.status(500).send({ error: 'Failed to fetch tasks' });
    }
    
}

exports.getTask = async (req, res) => {
    const { taskId } = req.params;

    try{
        const task = await Task.findById(taskId);
        if(!task){
            return res.status(404).send({  error: 'Task not found' })
        }
        res.status(200).send(task);
    } catch(err){
        res.status(500).send({ error: 'Failed to fetch task' });
    }
    
}

exports.updateTaskTitle = async (req, res) => {
    const { taskId } = req.params;
    const { title } = req.body;

    try {
        // Find task by taskId and update title to new title
        // New is true so that modified doc is returned, rather than the original
        const task = await Task.findByIdAndUpdate(taskId, { title: title }, { new: true });
        if (!task) {
            return res.status(404).send({ error: 'Task not found' });
        }
        res.status(200).send(task);
    } catch (err) {
        res.status(500).send({ error: 'Failed to update task title' });
    }
    
}

exports.updateTaskDescription = async (req, res) => {
    const { taskId } = req.params;
    const { description } = req.body;

    try{
        // Find task by taskId and update description to new description
        // New is true so that modified doc is returned, rather than the original
        const task = await Task.findByIdAndUpdate(taskId, {description: description});
        if (!task) {
            return res.status(404).send({ error: 'Task not found' });
        }
        res.status(200).send(task);
    } catch (err) {
        res.status(500).send({ error: 'Failed to update task description' });
    }
    
}
