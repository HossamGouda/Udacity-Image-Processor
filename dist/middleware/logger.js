"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = (req, res, next) => {
    console.log(`The page ${req.url} visited.`);
    next();
};
exports.default = logger;
