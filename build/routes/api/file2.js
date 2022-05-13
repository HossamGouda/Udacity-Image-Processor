"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var file2 = express_1.default.Router();
file2.get('/', function (req, res) {
    res.send('file2');
});
exports.default = file2;
