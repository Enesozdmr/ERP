"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_PRIVATE = exports.DB_URL = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = process.env.PORT || 8000;
exports.DB_URL = process.env.DB_URL || 'mongodb+srv://enesozdmr:1234567890@cluster0.ccrouoo.mongodb.net/suaritma';
exports.JWT_PRIVATE = process.env.JWT_PRIVATE || 'jl8rh9isdfsgsd324nzmoont8p';
//# sourceMappingURL=config.js.map