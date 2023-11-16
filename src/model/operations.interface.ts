import { OId } from '../types/objectId';

export interface IOperation {
    _id: OId;
    companyProfileID: OId;
    name: string;
    definition: string;
    productionStageID: OId;
    complianceDocumentDescription: string;
    description: string;
    riskValue: number;
    createdAt: any;
    updatedAt: any;
}
