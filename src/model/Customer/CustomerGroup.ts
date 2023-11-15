import mongoose from 'mongoose';

const customerGroupSchema = new mongoose.Schema({
    name: String
});

const CustomerGroup = mongoose.model('CustomerGroup', customerGroupSchema);

module.exports = CustomerGroup;
