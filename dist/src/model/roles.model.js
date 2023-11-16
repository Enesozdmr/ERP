"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const roleSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        enum: [
            'Admin',
            'Company Admin',
            'Parça Yönetim Sorumlusu',
            'Üretim Sorumlusu',
            'Satış Sorumlusu',
            'Bakım Sorumlusu',
            'Muhasebe',
            'Bayi'
        ],
        required: true
    }
});
const Role = mongoose_1.default.model('Role', roleSchema);
module.exports = Role;
//# sourceMappingURL=roles.model.js.map