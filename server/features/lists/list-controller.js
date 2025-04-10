const List = require('./list-model');

exports.createList = async (req, res) => {
    const { title } = req.body;

    try{
        const list = await List.create({title});
        res.status(201).send(list);
    } catch(err){
        res.status(500).send({ error: 'Failed to create list' });
    }
}

exports.getListById = async (req, res) => {
    const { listId } = req.params;

    try{
        const list = await List.findById(listId);
        if(!list){
            res.status(404).send({message : 'List not found'});
        }
        res.status(200).send(list);
    }catch(err){
        res.status(500).send({ error: 'Failed to fetch list' });
    }
}

exports.updateListTitle = async (req, res) => {
    const { listId } = req.params;
    const { title } = req.body;
    
    try {
        // New is true so that modified doc is returned, rather than the original
        const list = await List.findByIdAndUpdate(listId, { title: title }, { new: true });
        if (!list) {
            return res.status(404).send({ error: 'List not found' });
        }
        res.status(200).send(list);
    } catch (err) {
        res.status(500).send({ error: 'Failed to update list title' });
    }
}

exports.deleteList = async (req, res) => {
    const { listId } = req.params;

    try{
        const list = await List.findByIdAndDelete(listId);
        if(!list){
            res.status(404).send({message : 'List not found'});
        }
        res.status(200).send({message: 'List deleted successfully'});
    } catch(err){
        res.status(500).send({ error: 'Failed to delete list' });
    }
}