import { OId } from '../../types/objectId';

export interface ICompanyProfile {
    _id: OId;
    adminUserID: OId;
    name: string;
    officialName: string;
    taxNumber: number;
    taxOffice: string;
    adressCountryID: string;
    adressCityID: string;
    adressDistrictID: string;
    adress: string;
    logo: string;
}
