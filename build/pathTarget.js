"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exsist = exports.imaExtension = exports.makeDir = void 0;
var fs = __importStar(require("fs"));
var makeDir = function (target) {
    return fs.mkdirSync(target);
};
exports.makeDir = makeDir;
var imaExtension = function (imageName) {
    return imageName.includes('.jpg' || '.jpeg' || '.png' || '.gif');
};
exports.imaExtension = imaExtension;
var exsist = function (file) {
    return fs.existsSync(file);
};
exports.exsist = exsist;
