"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var main_1 = require("../../styles/main");
var Container = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(main_1.ContainerWrapper, null,
        children[0],
        react_1.default.createElement(main_1.BodyContent, null, children[1])));
};
exports.default = Container;
