"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const isEmail_1 = __importDefault(require("validator/lib/isEmail"));
exports.UserSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true,
        trim: true
    },
    surname: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        validate: [isEmail_1.default, 'Please enter a valid email']
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
        get: () => undefined
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
        required: true
    }
}, {
    id: false,
    toJSON: {
        getters: true
    },
    toObject: {
        getters: true
    },
    timestamps: true,
    versionKey: false
});
const UserModel = mongoose_1.default.model('User', exports.UserSchema);
exports.default = UserModel;
//# sourceMappingURL=user.model.js.map