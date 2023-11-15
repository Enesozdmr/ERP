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

},
    {
        timestamps: true
    }
);

const Operation = mongoose.model('Operation', operationSchema);

module.exports = Operation;
