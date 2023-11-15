"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const marksSchema = new mongoose_1.default.Schema({
    name: String
});
const Marks = mongoose_1.default.model('Marks', marksSchema);
module.exports = Marks;
//# sourceMappingURL=Marks.js.map