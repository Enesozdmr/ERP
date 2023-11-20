
import mongoose, { mongo } from 'mongoose';
import { IRole } from './roles.interface';

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: [
            'Admin',
            'Company Admin',
            'Parça Yönetim Sorumlusu',
            'Üretim Sorumlusu',
            'Satış Sorumlusu',
            'Bakım Sorumlusu',
            'Muhasebe',
            'Bayi'
        ],
        required: true
    }
});

const Role = mongoose.model<IRole & mongoose.Document>('Role', roleSchema);

export default Role;
