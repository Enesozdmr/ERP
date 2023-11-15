import mongoose from 'mongoose';
import { ICustomerGroup } from './customerGroup.interface';

const customerGroupSchema = new mongoose.Schema({
    name: String
});

const CustomerGroup = mongoose.model<ICustomerGroup & mongoose.Document>('CustomerGroup', customerGroupSchema);

module.exports = CustomerGroup;
