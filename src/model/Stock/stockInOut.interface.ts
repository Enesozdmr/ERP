import mongoose, { Schema, Document } from 'mongoose';

import { OId } from '../../types/objectId';

export interface IStockInOut {
    _id: OId;
    stockID: OId;
    type: string;
    billingNumber: string;
    billingDate: string;
    supplierGroupID: OId;
    customerGroupID: OId;
    recordDate: string;
    unit: string;
    count: number;
    currency: string;
    purchasePrice: number;
    unitPrice: number;
    costPrice: number;
    salesPrice: number;
    barcode: string;
    leadTime: string;
    billingPDFLink: string;
}

export interface addStockkInOutParams {


    stockID: OId;
    type: string;
    billingNumber: string;
    billingDate: string;
    supplierGroupID: OId;
    customerGroupID: OId;
    recordDate: string;
    unit: string;
    count: number;
    currency: string;
    purchasePrice: number;
    unitPrice: number;
    costPrice: number;
    salesPrice: number;
    barcode: string;
    leadTime: string;
    billingPDFLink: string;

}
