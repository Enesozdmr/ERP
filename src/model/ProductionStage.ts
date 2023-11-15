import mongoose from 'mongoose';

const productionStageSchema = new mongoose.Schema({
    companyID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CompanyProfile'
    },
    name: String,
    definition: String,
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: Date.now
    }
});

const ProductionStage = mongoose.model('ProductionStage', productionStageSchema);

module.exports = ProductionStage;
