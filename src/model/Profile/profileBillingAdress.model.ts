import mongoose from 'mongoose';
import { IProfileBillingAdress } from './profileBillingAdress.interface';

const profileBillingAdressSchema = new mongoose.Schema({
    profileID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile'
    },
    profileTypeID: {
        type: mongoose.Schema.Types.ObjectId,
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
}
);

const ProfileBillingAdress = mongoose.model<IProfileBillingAdress & mongoose.Document>('ProfileBillingAdress', profileBillingAdressSchema);

export default ProfileBillingAdress;
