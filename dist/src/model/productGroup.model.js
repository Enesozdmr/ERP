"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productGroupSchema = new mongoose_1.default.Schema({
    name: String
});
const ProductGroup = mongoose_1.default.model('ProductGroup', productGroupSchema);
exports.default = ProductGroup;
//# sourceMappingURL=productGroup.model.js.map