import { OId } from '../types/objectId';

export interface IPersonelProfile {
    _id: OId;
    roleId: OId;
    companyID: number;
    isCompanyAdmin: boolean;
    isUser: boolean;
    name: string;
    surname?: string;
    tcNo?: number;
    gender?: 'Erkek' | 'Kadın';
    phone?: string;
    email: string;
    sgkNo?: string;
    sicilNo?: string;
    birthDate?: Date;
    hireDate?: Date;
    jobTitle?: string;
    görevi?: string;
    education?: 'İlkokul' | 'Lise' | 'Üniversite' | 'Y.Lisans' | 'Doktora';
    mezunOlduguOkul?: string;
    meslek?: string;
    medeniDurum?: string;
    cocukSayisi?: number;
    maas?: number;
    istenAyrildiMi?: boolean;
    yillikIzinHakki?: number;
    profilePhoto?: string;
    password: string;
    adressCountryID?: string;
    adressCityID?: string;
    adressDistrictID?: string;
    adress?: string;
    note?: string;
}
