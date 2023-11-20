import mongoose, { mongo } from 'mongoose';
import { IOperation } from './operations.interface';

const operationSchema = new mongoose.Schema({
    companyProfileID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CompanyProfile'
    },
    name: String,
    definition: String,
    productionStageID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductionStage'
    },
    complianceDocumentDescription: String,
    description: String,
    riskValue: Number,

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

const Operation = mongoose.model<IOperation & mongoose.Document>('Operation', operationSchema);

export default Operation;
