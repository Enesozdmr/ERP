import mongoose from 'mongoose';
import { IWasteReason } from './wasterReason.interface';

const wasteReasonSchema = new mongoose.Schema({
    companyProfileID: {
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

const WasteReason = mongoose.model<IWasteReason & mongoose.Document>('WasteReason', wasteReasonSchema);

module.exports = WasteReason;
