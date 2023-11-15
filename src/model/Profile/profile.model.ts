
import mongoose, { Schema } from 'mongoose'

import { IProfile } from './profile.interface';

const profileSchema = new mongoose.Schema({
    customerGroupID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CustomerGroup'
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
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

const Profile = mongoose.model<IProfile & mongoose.Document>('Profile', profileSchema);

export default Profile