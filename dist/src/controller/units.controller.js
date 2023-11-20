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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitsController = void 0;
const units_model_1 = __importDefault(require("../model/units.model"));
const tsoa_1 = require("tsoa");
let UnitsController = class UnitsController extends tsoa_1.Controller {
    async getAllUnits() {
        return units_model_1.default.find();
    }
};
exports.UnitsController = UnitsController;
__decorate([
    (0, tsoa_1.Get)("get-all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UnitsController.prototype, "getAllUnits", null);
exports.UnitsController = UnitsController = __decorate([
    (0, tsoa_1.Route)("units"),
    (0, tsoa_1.Tags)("Units")
], UnitsController);
//# sourceMappingURL=units.controller.js.map