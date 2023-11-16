import mongoose from 'mongoose';
import { IMarks } from './marks.interface';

const marksSchema = new mongoose.Schema({
    name: String
});

const Marks = mongoose.model<IMarks & mongoose.Document>('Marks', marksSchema);

module.exports = Marks;
