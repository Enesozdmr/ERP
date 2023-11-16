import { OId } from '../types/objectId';

export interface IRoute {
    _id: OId;
    companyProfileID: OId;
    operationID: OId;
    definition: string;
    queue: number;
    createdDate: any;
    updatedDate: any;
}
