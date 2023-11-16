"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const routeSchema = new mongoose_1.default.Schema({
    companyProfileID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'CompanyProfile' // CompanyProfile koleksiyonuna referans
    },
    operationID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Operations' // Operation koleksiyonuna referans
    },
    definition: String,
    queue: Number,
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
const Route = mongoose_1.default.model('Route', routeSchema);
module.exports = Route;
//# sourceMappingURL=routes.model.js.map