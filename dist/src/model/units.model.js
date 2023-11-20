"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const unitSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        unique: true
    }
});
const Unit = mongoose_1.default.model('Unit', unitSchema);
exports.default = Unit;
//# sourceMappingURL=units.model.js.map