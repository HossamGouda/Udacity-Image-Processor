"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageResizer_1 = __importDefault(require("./api/imageResizer"));
var logger_1 = __importDefault(require("../middleware/logger"));
var routes = express_1.default.Router();
routes.use(logger_1.default);
routes.get('/', function (req, res) {
    res.send('Welcome to Image API resizer');
});
routes.use('/resize', imageResizer_1.default);
exports.default = routes;
