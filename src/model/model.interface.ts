import { OId } from '../types/objectId';

export interface IModel {
    _id?: OId;
    name: string;
    mark: OId;
}
