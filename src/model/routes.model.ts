import { IRoute } from 'express';
import mongoose from 'mongoose';

const routeSchema = new mongoose.Schema({
    companyProfileID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CompanyProfile' // CompanyProfile koleksiyonuna referans
    },
    operationID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Operations' // Operation koleksiyonuna referans
    },
    definition: String,
    queue: Number,

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
    },
);

const Route = mongoose.model<IRoute & mongoose.Document>('Route', routeSchema);

export default Route;
