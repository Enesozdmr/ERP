import mongoose from 'mongoose';
import { IUnit } from './units.interface';

const unitSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    }
});

const Unit = mongoose.model<IUnit & mongoose.Document>('Unit', unitSchema);

export default Unit;
