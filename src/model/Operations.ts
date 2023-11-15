import mongoose from 'mongoose';

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
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: Date.now
    }
});

const Operation = mongoose.model('Operation', operationSchema);

module.exports = Operation;
