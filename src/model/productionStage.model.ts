import mongoose from 'mongoose';
import { IProductionStage } from './productionStage.interface';

const productionStageSchema = new mongoose.Schema({
    companyID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CompanyProfile'
    },
    name: String,
    definition: String,

},
    {
        id: false,
        toJSON: {
            getters: true
        },
        toObject: {
            getters: true
        },
        timestamps: true,
        versionKey: false
    }
);

const ProductionStage = mongoose.model<IProductionStage & mongoose.Document>('ProductionStage', productionStageSchema);

module.exports = ProductionStage;
