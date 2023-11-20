import { OId } from '../../types/objectId';

export interface ISupplierGroup {
    _id: OId;
    name: string;
}

export interface SupplierNameParams {
    name: string;
}