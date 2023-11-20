import mongoose from 'mongoose';
import { IProfileType } from './profileType.interface';


const profileTypeSchema = new mongoose.Schema({
    name: {
        type: String,
    }
});

const ProfileType = mongoose.model<IProfileType & mongoose.Document>('ProfileType', profileTypeSchema);

export default ProfileType;
