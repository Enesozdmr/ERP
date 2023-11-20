import { OId } from '../types/objectId';

export interface IWasteReason {
    _id: OId;
    companyProfileID: OId;
    name: string;
    definition: string;
    createdDate: any;
    updatedDate: any;
}
