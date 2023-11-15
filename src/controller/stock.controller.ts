import StockInOutCard from "../model/Stock/stockInOut.model";
import GeneralStock from "../model/Stock/generalStock.model";
import { Controller, Get, Route, Tags } from "tsoa";

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

}
// @Route("stock-in-out")
// @Tags("Stock-in-out")
// export class StockInOutController extends Controller {



//     @Get("get-all-stockInOut")
//     public async getAllStockInOut() {
//         return StockInOutCard.find()
//     }
// }