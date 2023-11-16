"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const operationSchema = new mongoose_1.default.Schema({
    companyProfileID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'CompanyProfile'
    },
    name: String,
    definition: String,
    productionStageID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'ProductionStage'
    },
    complianceDocumentDescription: String,
    description: String,
    riskValue: Number,
}, {
    id: false,
    toJSON: {
        getters: true
    },
    toObject: {
        getters: true
    },
    timestamps: true,
    versionKey: false
});
const Operation = mongoose_1.default.model('Operation', operationSchema);
module.exports = Operation;
//# sourceMappingURL=operations.model.js.map