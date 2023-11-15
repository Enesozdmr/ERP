import mongoose from 'mongoose';

const supplierGroupSchema = new mongoose.Schema({
    name: String
});

const SupplierGroup = mongoose.model('SupplierGroup', supplierGroupSchema);

module.exports = SupplierGroup;
