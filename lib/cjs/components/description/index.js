"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var main_1 = require("../../styles/main");
var Description = function (_a) {
    var text = _a.text, _b = _a.variant, variant = _b === void 0 ? 'description' : _b;
    return variant === 'subtitle' ? (react_1.default.createElement(main_1.Subtitle, null, text)) : (react_1.default.createElement(main_1.DescriptionText, null, text));
};
exports.default = Description;
