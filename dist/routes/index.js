"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("../middleware/logger"));
const crop_1 = __importDefault(require("./api/crop"));
const routes = express_1.default.Router();
routes.use(logger_1.default);
routes.get('/', (req, res) => {
    res.send('Hello from API Image resizer');
});
routes.use('/crop', crop_1.default);
exports.default = routes;
