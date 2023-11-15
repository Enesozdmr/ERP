"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const runtime_1 = require("@tsoa/runtime");
const HttpException_1 = __importDefault(require("../exceptions/HttpException"));
const errorMiddleware = (error, request, response, next) => {
    if (error instanceof runtime_1.ValidateError) {
        const status = error.status || 422;
        return response.status(status).json({
            message: 'Validation Failed',
            details: error.fields
        });
    }
    if (error instanceof HttpException_1.default) {
        const status = error.status || 500;
        const message = error.message || 'Something went wrong';
        return response.status(status).send({
            status,
            message
        });
    }
    if (error instanceof Error) {
        if (error.name === 'ValidationError') {
            return response.status(400).json({
                message: error.message,
                error: error
            });
        }
        return response.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        });
    }
    next();
};
exports.default = errorMiddleware;
//# sourceMappingURL=error.middleware.js.map