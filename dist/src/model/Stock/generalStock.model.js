"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const generalStockSchema = new mongoose_1.Schema({
    companyProfileID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
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
}, {
    id: false,
    toJSON: {
        getters: true,
    },
    toObject: {
        getters: true,
    },
    timestamps: true,
    versionKey: false,
});
const GeneralStock = mongoose_1.default.model('GeneralStock', generalStockSchema);
exports.default = GeneralStock;
//# sourceMappingURL=generalStock.model.js.map