"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const profileSchema = new mongoose_1.default.Schema({
    customerGroupID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'CustomerGroup'
    },
    type: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'ProfileType' // ProfileType koleksiyonuna referans
    },
    name: {
        type: String,
    },
    officialName: {
        type: String,
    },
    taxNumber: Number,
    taxOffice: {
        type: String,
    },
    addressCountry: {
        type: String,
    },
    addressCity: {
        type: String,
    },
    addressDistrict: {
        type: String,
    },
    address: {
        type: String,
    },
    contactName: {
        type: String,
    },
    contactPhone: {
        type: String,
    },
    contactEmail: {
        type: String,
    },
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
const Profile = mongoose_1.default.model('Profile', profileSchema);
exports.default = Profile;
//# sourceMappingURL=profile.model.js.map