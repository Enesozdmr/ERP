import { OId } from '../../types/objectId';

export interface ICompanyBillingAddress {
    _id: OId;
    companyProfileID: OId;
    billingType: string;
    addressName: string;
    name: string;
    surname: string;
    idNumber: string;
    companyName: string;
    taxNumber: string;
    taxOffice: string;
    phone: string;
    email: string;
    addressCountry: string;
    addressState: string;
    addressCity: string;
    address: string;
    createdDate?: Date;
    updatedDate?: Date;
}
