import mongoose from 'mongoose';
import { IModel } from './model.interface';

const modelSchema = new mongoose.Schema({
    name: String,
    mark: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Marks'
    }
});

const Model = mongoose.model<IModel & mongoose.Document>('Model', modelSchema);

export default Model;
