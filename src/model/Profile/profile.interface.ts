// ProfileInterface.ts
import mongoose from 'mongoose';
import { OId } from '../../types/objectId';

export interface IProfile {
    _id: OId
    customerGroupID: OId
    type: OId
    name: string
    officialName: string
    taxNumber: number
    taxOffice: string
    addressCountry: string
    addressCity: string
    addressDistrict: string
    address: string
    contactName: string
    contactPhone: string
    contactEmail: string
    createdAt: any
    updatedAt: any

}
export interface ProfilePostParams {
    customerGroupID: OId
    type: OId
    name: string
    officialName: string
    taxNumber: number
    taxOffice: string
    addressCountry: string
    addressCity: string
    addressDistrict: string
    address: string
    contactName: string
    contactPhone: string
    contactEmail: string
}
export interface ProfileListParams {
    customerGroupID: OId
    type: OId
    name: string
    officialName: string
    taxNumber: number
    taxOffice: string
    addressCountry: string
    addressCity: string
    addressDistrict: string
    address: string
    contactName: string
    contactPhone: string
    contactEmail: string
}