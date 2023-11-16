"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const taskGroupSchema = new mongoose_1.default.Schema({
    name: String
});
const TaskGroup = mongoose_1.default.model('TaskGroup', taskGroupSchema);
module.exports = TaskGroup;
//# sourceMappingURL=taskGroup.model.js.map