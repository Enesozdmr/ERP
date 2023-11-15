import mongoose, { Schema } from "mongoose";
import { IStockInOut } from "./stockInOut.interface";

const stockInOutSchema: Schema = new Schema(
    {
        stockID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'GeneralStock',
        },
        type: String,
        billingNumber: String,
        billingDate: String,
        supplierGroupID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SupplierGroup',
        },
        customerGroupID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CustomerGroup',
        },
        recordDate: String,
        unit: String,
        count: Number,
        currency: String,
        purchasePrice: Number,
        unitPrice: Number,
        costPrice: Number,
        salesPrice: Number,
        barcode: String,
        leadTime: String,
        billingPDFLink: String,
    },
    {
        id: false,
        toJSON: {
            getters: true,
        },
        toObject: {
            getters: true,
        },
        timestamps: true,
        versionKey: false,
    }
);

const StockInOutCard = mongoose.model<IStockInOut>('StockInOut', stockInOutSchema);

export default StockInOutCard;