import { OId } from '../../types/objectId';

export interface IProfileBillingAdress {
    _id: OId;
    profileID: OId;
    profileTypeID: OId;
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
    addressCountryID: string;
    addressStateID: string;
    addressCityID: string;
    address: string;
    createdDate: any;
    updatedDate: any;
}
