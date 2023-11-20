"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const companyProfileSchema = new mongoose_1.default.Schema({
    adminUserID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'PersonelProfile'
    },
    name: String,
    officialName: String,
    taxNumber: Number,
    taxOffice: String,
    adressCountryID: String,
    adressCityID: String,
    adressDistrictID: String,
    adress: String,
    logo: String
});
const CompanyProfile = mongoose_1.default.model('CompanyProfile', companyProfileSchema);
exports.default = CompanyProfile;
//# sourceMappingURL=companyProfile.model.js.map