"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const profileBillingAdressSchema = new mongoose_1.default.Schema({
    profileID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Profile'
    },
    profileTypeID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'ProfileType'
    },
    billingType: {
        type: String,
        enum: ["Individual", "Institutional"]
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
    addressCountryID: String,
    addressStateID: String,
    addressCityID: String,
    address: String,
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: Date.now
    }
});
const ProfileBillingAdress = mongoose_1.default.model('ProfileBillingAdress', profileBillingAdressSchema);
module.exports = ProfileBillingAdress;
//# sourceMappingURL=ProfileBillingAdress.js.map