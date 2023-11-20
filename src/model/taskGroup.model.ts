import mongoose from 'mongoose';
import { ITaskGroup } from './taskGroup.interface';

const taskGroupSchema = new mongoose.Schema({
    name: String
});

const TaskGroup = mongoose.model<ITaskGroup & mongoose.Document>('TaskGroup', taskGroupSchema);

export default TaskGroup;
