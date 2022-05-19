"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const crop_1 = __importDefault(require("../../routes/api/crop"));
const request = (0, supertest_1.default)(crop_1.default);
describe('testing the crop endpoint params', () => {
    it('test if user entered params or not ', async () => {
        request.get('/crop').expect(200);
    });
    it('test if user entered params all params in as requested or not ', async () => {
        request.get('/crop?name=fjord&width=500').expect(400);
    });
    it('test if user entered Image name existe in Database or not ', async () => {
        request.get('/crop?name=&width=500&height=250').expect(400);
    });
    it('test if user entered Image name existe in Database or not ', async () => {
        request.get('/crop?name=fjord&width=&height=250').expect(400);
    });
    it('test if user entered Image name existe in Database or not ', async () => {
        request.get('/crop?name=fjord&width=400&height=').expect(400);
    });
});
