import { Controller, Get, Route, Tags, Security, Post, Query, Body, FormField, Path, Patch, Delete } from "tsoa"
import { OId } from "../types/objectId"
import SupplierGroup from "../model/SupplierGroup/supplierGroup.model"

@Route("supplier")
@Tags("Supplier")
export class SupplierController extends Controller {
    @Get("supplier-get")
    public async getAllSuppliers() {
        return SupplierGroup.find()

    }
}