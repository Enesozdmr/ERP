import { OId } from '../types/objectId';

export interface IProductionStage {
    _id: OId;
    companyID: OId;
    name: string;
    definition: string;
    createdDate: any;
    updatedDate: any;
}
