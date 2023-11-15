"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressAuthentication = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../model/user/user.model"));
const config_1 = require("../config/config");
const UnauthorizedException_1 = __importDefault(require("../exceptions/UnauthorizedException"));
const expressAuthentication = async (request, securityName, scopes) => {
    if (securityName === 'jwt') {
        const token = request.header('x-auth');
        if (!token) {
            throw new UnauthorizedException_1.default('No token provided');
        }
        let decoded;
        try {
            decoded = jsonwebtoken_1.default.verify(token, config_1.JWT_PRIVATE);
        }
        catch (error) {
            throw new UnauthorizedException_1.default('Invalid Token');
        }
        const user = await user_model_1.default.findById(decoded._id);
        if (!user) {
            throw new UnauthorizedException_1.default();
        }
        console.log('user.role: ', user.role);
        console.log('scopes: ', scopes);
        if (scopes && scopes.length > 0 && !scopes.includes(user.role)) {
            throw new UnauthorizedException_1.default('User is unauthorized to perform this action.');
        }
        return user;
    }
};
exports.expressAuthentication = expressAuthentication;
//# sourceMappingURL=authentication.middleware.js.map