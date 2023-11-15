import mongoose from 'mongoose';

const taskGroupSchema = new mongoose.Schema({
    name: String
});

const TaskGroup = mongoose.model('TaskGroup', taskGroupSchema);

module.exports = TaskGroup;
