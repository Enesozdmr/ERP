import mongoose from 'mongoose';
import { ICompanyBillingAddress } from './companyBillingAddress.interface';

const billingAddressSchema = new mongoose.Schema({
    companyProfileID: {
        type: mongoose.Schema.Types.ObjectId,
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

},

    {
        id: false,
        toJSON: {
            getters: true
        },
        toObject: {
            getters: true
        },
        timestamps: true,
        versionKey: false
    },

);

const BillingAddress = mongoose.model<ICompanyBillingAddress & mongoose.Document>('CompanyBillingAddress', billingAddressSchema);

module.exports = BillingAddress;
