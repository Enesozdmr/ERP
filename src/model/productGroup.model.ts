
import mongoose from 'mongoose';
import { IProductGroup } from './productGroup.interface';

const productGroupSchema = new mongoose.Schema({
    name: String
});

const ProductGroup = mongoose.model<IProductGroup & mongoose.Document>('ProductGroup', productGroupSchema);

export default ProductGroup;
