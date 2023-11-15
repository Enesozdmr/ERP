
import mongoose from 'mongoose';

const productGroupSchema = new mongoose.Schema({
    name: String
});

const ProductGroup = mongoose.model('ProductGroup', productGroupSchema);

module.exports = ProductGroup;
