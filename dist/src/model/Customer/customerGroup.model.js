"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const customerGroupSchema = new mongoose_1.default.Schema({
    name: String
});
const CustomerGroup = mongoose_1.default.model('CustomerGroup', customerGroupSchema);
module.exports = CustomerGroup;
//# sourceMappingURL=customerGroup.model.js.map