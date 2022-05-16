"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageResizer_1 = __importDefault(require("./api/imageResizer"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.send('images Api');
});
routes.use('/imageresizer', imageResizer_1.default);
exports.default = routes;
