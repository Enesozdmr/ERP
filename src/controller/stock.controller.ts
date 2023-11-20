import StockInOutCard from "../model/Stock/stockInOut.model";
import GeneralStock from "../model/Stock/generalStock.model";
import { Body, Controller, Get, Patch, Path, Post, Route, Tags } from "tsoa";
import { IGeneralStock, addGeneralStockParams, updateGeneralStockParams } from "../model/Stock/generalStock.interface";
import { addStockkInOutParams } from "../model/Stock/stockInOut.interface";
import { OId } from "../types/objectId";

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

    @Post("stock-in-out")
    public async addStockInOut(@Body() body: addStockkInOutParams):
        Promise<addStockkInOutParams> {
        const u = new StockInOutCard(body)
        await u.save()
        return u as addStockkInOutParams

    }
    @Patch("{id}")
    public async updateUserById(@Path() id: OId, @Body() body: updateGeneralStockParams) {
        return await GeneralStock.findByIdAndUpdate(id, body)
    }


}
