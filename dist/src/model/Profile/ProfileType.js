"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const profileTypeSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
    }
});
const ProfileType = mongoose_1.default.model('ProfileType', profileTypeSchema);
module.exports = ProfileType;
//# sourceMappingURL=ProfileType.js.map