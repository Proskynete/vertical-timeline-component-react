"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var main_1 = require("../../styles/main");
var Section = function (_a) {
    var title = _a.title, children = _a.children;
    return (react_1.default.createElement(main_1.BodyWrapper, null,
        react_1.default.createElement(main_1.Title, null, title),
        react_1.default.createElement(main_1.BodyInner, null, children)));
};
exports.default = Section;
