"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productionStageSchema = new mongoose_1.default.Schema({
    companyID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'CompanyProfile'
    },
    name: String,
    definition: String,
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
const ProductionStage = mongoose_1.default.model('ProductionStage', productionStageSchema);
module.exports = ProductionStage;
//# sourceMappingURL=productionStage.model.js.map