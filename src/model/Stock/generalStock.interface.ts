
import { OId } from '../../types/objectId';

export interface IGeneralStock {
    _id: OId
    companyProfileID: OId;
    stockName: string;
    stockNameEN: string;
    stockCode: string;
    stockType: string;
    recordDate: string;
    isMainStock: boolean;
    status: boolean;
    marks: string;
    model: string;
    generalBarcode: string;
    stockUnit: string;
    stockCount: number;
    shelfNo: string;
    shelfFloorNo: string;
    specialCode: string;
    category: string;
    subCategory: string;
    subSubCategory: string;
    descriptions: string;
    producerCode: string;
    sutCode: string;
    producerName: string;
    producerAddress: string;
    leadTime: string;
    weightKg: number;
    weight: string;
    costPrice: number;
    outsourcingPrice: number;
    outsourcing: boolean;
    utsRecord: boolean;
}
