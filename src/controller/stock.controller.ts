import StockInOutCard from "../model/Stock/stockInOut.model";
import GeneralStock from "../model/Stock/generalStock.model";
import { Body, Controller, Get, Post, Route, Tags } from "tsoa";
import { IGeneralStock, addGeneralStockParams } from "../model/Stock/generalStock.interface";

@Route("stock")
@Tags("Stock")
export class StockController extends Controller {
    @Get("get-all")
    public async getAllStock() {
        return GeneralStock.find()
    }

    @Get("get-all-stockInOut")
    public async getAllStockInOut() {
        return StockInOutCard.find()
    }

    @Post()
    public async addGeneralStock(@Body() body: addGeneralStockParams): Promise<addGeneralStockParams> {
        const u = new GeneralStock(body)
        await u.save()
        return u as addGeneralStockParams
    }

}
