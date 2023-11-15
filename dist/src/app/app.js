"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const serve_static_1 = __importDefault(require("serve-static"));
const path_1 = __importDefault(require("path"));
const config_1 = require("../config/config");
const routes_1 = require("../../routes");
const swagger_json_1 = __importDefault(require("../../swagger/swagger.json"));
const error_middleware_1 = __importDefault(require("../middleware/error.middleware"));
class App {
    app;
    constructor() {
        this.app = (0, express_1.default)();
        this.connectToTheDatabase();
        this.initializeMiddlewares();
        this.initializeRoutes();
        this.initializeApiDocs();
        this.initializeErrorHandling();
    }
    listen() {
        this.app.listen(config_1.PORT, () => {
            console.log(`App listening on the port ${config_1.PORT}`);
        });
    }
    initializeMiddlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, serve_static_1.default)(path_1.default.join(__dirname, '../../public')));
        this.app.use((0, serve_static_1.default)(path_1.default.join(__dirname, '../../swagger')));
    }
    initializeRoutes() {
        (0, routes_1.RegisterRoutes)(this.app);
    }
    initializeApiDocs() {
        this.app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default, {
            swaggerOptions: {}
        }));
    }
    initializeErrorHandling() {
        this.app.use(error_middleware_1.default);
    }
    connectToTheDatabase() {
        mongoose_1.default
            .connect(config_1.DB_URL)
            .then(() => {
            console.log('Connected to DB');
        })
            .catch((e) => {
            console.log(e);
            console.log('DB error');
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map