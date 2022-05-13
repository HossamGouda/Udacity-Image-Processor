"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var file_1 = __importDefault(require("./api/file"));
var file2_1 = __importDefault(require("./api/file2"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.send('images Api');
});
routes.use('/file1', file_1.default);
routes.use('/file2', file2_1.default);
exports.default = routes;
