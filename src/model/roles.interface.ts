import { OId } from '../types/objectId';

export interface IRole {
    _id: OId;
    name: 'Admin' | 'Company Admin' | 'Parça Yönetim Sorumlusu' | 'Üretim Sorumlusu' | 'Satış Sorumlusu' | 'Bakım Sorumlusu' | 'Muhasebe' | 'Bayi';
}
