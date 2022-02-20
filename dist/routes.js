"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserControler_1 = __importDefault(require("./controllers/UserControler"));
const routes = (0, express_1.Router)();
routes.get('/users', UserControler_1.default.index);
routes.post('/users', UserControler_1.default.create);
exports.default = routes;
