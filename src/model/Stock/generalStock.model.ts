import mongoose, { Schema } from 'mongoose'
import { IGeneralStock } from './generalStock.interface';

const generalStockSchema: Schema = new Schema(
    {
        companyProfileID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CompanyProfile'
        },
        stockName: String,
        stockNameEN: String,
        stockCode: String,
        stockType: String,
        recordDate: String,
        isMainStock: Boolean,
        status: String,
        marks: String,
        model: String,
        generalBarcode: String,
        stockUnit: String,
        stockCount: Number,
        shelfNo: String,
        shelfFloorNo: String,
        specialCode: String,
        category: String,
        subCategory: String,
        subSubCategory: String,
        descriptions: String,
        producerCode: String,
        sutCode: String,
        producerName: String,
        producerAddress: String,
        leadTime: String,
        weightKg: Number,
        weight: String,
        costPrice: Number,
        outsourcingPrice: Number,
        outsourcing: Boolean,
        utsRecord: Boolean,
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

const GeneralStock = mongoose.model<IGeneralStock>('GeneralStock', generalStockSchema);

export default GeneralStock;