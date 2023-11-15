"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const billingAddressSchema = new mongoose_1.default.Schema({
    companyProfileID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'CompanyProfile'
    },
    billingType: {
        type: String,
    },
    addressName: String,
    name: String,
    surname: String,
    idNumber: String,
    companyName: String,
    taxNumber: String,
    taxOffice: String,
    phone: String,
    email: String,
    addressCountry: String,
    addressState: String,
    addressCity: String,
    address: String,
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
const BillingAddress = mongoose_1.default.model('CompanyBillingAddress', billingAddressSchema);
module.exports = BillingAddress;
//# sourceMappingURL=companyBillingAddress.model.js.map