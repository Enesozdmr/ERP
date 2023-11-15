"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const wasteReasonSchema = new mongoose_1.default.Schema({
    companyProfileID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
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
const WasteReason = mongoose_1.default.model('WasteReason', wasteReasonSchema);
module.exports = WasteReason;
//# sourceMappingURL=WasteReason.js.map