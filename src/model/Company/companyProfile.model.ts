import mongoose from 'mongoose';
import { ICompanyProfile } from './companyProfile.interface';

const companyProfileSchema = new mongoose.Schema({
    adminUserID: {
        type: mongoose.Schema.Types.ObjectId,
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

const CompanyProfile = mongoose.model<ICompanyProfile & mongoose.Document>('CompanyProfile', companyProfileSchema);

module.exports = CompanyProfile;
