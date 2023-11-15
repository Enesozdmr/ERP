"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const documentTypeSchema = new mongoose_1.default.Schema({
    name: String
});
const DocumentType = mongoose_1.default.model('DocumentType', documentTypeSchema);
module.exports = DocumentType;
//# sourceMappingURL=DocumentType.js.map