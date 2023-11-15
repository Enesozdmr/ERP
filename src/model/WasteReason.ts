import mongoose from 'mongoose';

const wasteReasonSchema = new mongoose.Schema({
    companyProfileID: {
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

const WasteReason = mongoose.model('WasteReason', wasteReasonSchema);

module.exports = WasteReason;
