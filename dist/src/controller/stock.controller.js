"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockController = void 0;
const stockInOut_model_1 = __importDefault(require("../model/Stock/stockInOut.model"));
const generalStock_model_1 = __importDefault(require("../model/Stock/generalStock.model"));
const tsoa_1 = require("tsoa");
let StockController = class StockController extends tsoa_1.Controller {
    async getAllStock() {
        return generalStock_model_1.default.find();
    }
    async getAllStockInOut() {
        return stockInOut_model_1.default.find();
    }
    async addGeneralStock(body) {
        const u = new generalStock_model_1.default(body);
        await u.save();
        return u;
    }
    async addStockInOut(body) {
        const u = new stockInOut_model_1.default(body);
        await u.save();
        return u;
    }
    async updateUserById(id, body) {
        return await generalStock_model_1.default.findByIdAndUpdate(id, body);
    }
};
exports.StockController = StockController;
__decorate([
    (0, tsoa_1.Get)("get-all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StockController.prototype, "getAllStock", null);
__decorate([
    (0, tsoa_1.Get)("get-all-stockInOut"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StockController.prototype, "getAllStockInOut", null);
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "addGeneralStock", null);
__decorate([
    (0, tsoa_1.Post)("stock-in-out"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "addStockInOut", null);
__decorate([
    (0, tsoa_1.Patch)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "updateUserById", null);
exports.StockController = StockController = __decorate([
    (0, tsoa_1.Route)("stock"),
    (0, tsoa_1.Tags)("Stock")
], StockController);
//# sourceMappingURL=stock.controller.js.map