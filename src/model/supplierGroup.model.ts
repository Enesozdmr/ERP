import mongoose from 'mongoose';
import { ISupplierGroup } from './supplierGroup.interface';

const supplierGroupSchema = new mongoose.Schema({
    name: String
});

const SupplierGroup = mongoose.model<ISupplierGroup & mongoose.Document>('SupplierGroup', supplierGroupSchema);

module.exports = SupplierGroup;
