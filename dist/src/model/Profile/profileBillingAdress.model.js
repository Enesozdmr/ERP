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
const ProfileBillingAdress = mongoose_1.default.model('ProfileBillingAdress', profileBillingAdressSchema);
exports.default = ProfileBillingAdress;
//# sourceMappingURL=profileBillingAdress.model.js.map