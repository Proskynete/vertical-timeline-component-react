"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = require("styled-components");
var config_1 = require("../../config");
var config_context_1 = require("../../context/config.context");
var main_1 = require("../../styles/main");
var Timeline = function (_a) {
    var _b = _a.theme, theme = _b === void 0 ? config_1.defaultValues.theme : _b, _c = _a.lang, lang = _c === void 0 ? config_1.defaultValues.lang : _c, _d = _a.dateFormat, dateFormat = _d === void 0 ? config_1.defaultValues.dateFormat : _d, children = _a.children;
    return (react_1.default.createElement(main_1.TimelineWrapper, null,
        react_1.default.createElement(main_1.TimelineWrapperInner, null,
            react_1.default.createElement(config_context_1.ConfigContext.Provider, { value: { lang: lang, dateFormat: dateFormat } },
                react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme }, children)))));
};
exports.default = Timeline;
