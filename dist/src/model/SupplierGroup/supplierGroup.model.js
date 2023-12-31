"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const supplierGroupSchema = new mongoose_1.default.Schema({
    name: String
});
const SupplierGroup = mongoose_1.default.model('SupplierGroup', supplierGroupSchema);
exports.default = SupplierGroup;
//# sourceMappingURL=supplierGroup.model.js.map