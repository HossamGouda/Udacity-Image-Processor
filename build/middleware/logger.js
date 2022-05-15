"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (req, res, next) {
    console.log("The page has been visited ".concat(req.url, "."));
    next();
};
exports.default = logger;
