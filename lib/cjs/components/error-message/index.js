"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessage = void 0;
var react_1 = __importDefault(require("react"));
var main_1 = require("../../styles/main");
var ErrorMessage = function (_a) {
    var type = _a.type, component = _a.component;
    return (react_1.default.createElement(react_1.default.Fragment, null, type === 'atLeast' ? (react_1.default.createElement(main_1.TextErrorMessage, null,
        "You need at least one ",
        react_1.default.createElement("code", null, "<".concat(component, " />")),
        " to correctly render this component")) : (react_1.default.createElement(main_1.TextErrorMessage, null,
        "This component only supports ",
        react_1.default.createElement("code", null, "<".concat(component, " />")),
        " components as children"))));
};
exports.ErrorMessage = ErrorMessage;
