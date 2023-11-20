import Unit from "../model/units.model";
import { Controller, Get, Route, Tags } from "tsoa";

@Route("units")
@Tags("Units")
export class UnitsController extends Controller {
    @Get("get-all")
    public async getAllUnits() {
        return Unit.find()
    }
}