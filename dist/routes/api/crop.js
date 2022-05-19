"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const resize_1 = __importDefault(require("../../utilities/resize"));
const fs_1 = require("fs");
const imageCrop = express_1.default.Router();
imageCrop.get('/', async (req, res) => {
    const { name, width, height } = req.query;
    const fileSource = path_1.default.resolve('./') + '/assets/';
    const resultPath = fileSource + 'thumbs/';
    const target = fileSource + name + '.jpg';
    const exists = (location) => {
        return (0, fs_1.existsSync)(location);
    };
    if (Object.keys(req.query).length === 0) {
        return res
            .status(200)
            .send('Please Enter filename, width and height !! no Extension needed');
    }
    if (!name ||
        !width ||
        !height ||
        isNaN(Number(width)) ||
        isNaN(Number(height))) {
        return res.status(400).send('Error, missing parameters');
    }
    if (!exists(target)) {
        return res.status(404).send('Image not in Database');
    }
    if (!exists(resultPath)) {
        return (0, fs_1.mkdirSync)(resultPath);
    }
    const outPut = resultPath + `${name}-thumbs-${width}-${height}.jpg`;
    if (exists(outPut)) {
        res.sendFile(outPut);
    }
    else {
        await (0, resize_1.default)(target, outPut, Number(width), Number(height));
        res.sendFile(outPut);
    }
});
exports.default = imageCrop;
