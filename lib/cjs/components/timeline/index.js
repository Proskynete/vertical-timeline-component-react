"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.Timeline = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = require("styled-components");
var config_1 = require("../../config");
var config_context_1 = require("../../context/config.context");
var main_1 = require("../../styles/main");
var container_1 = require("../container");
var Timeline = function (_a) {
    var _b;
    var _c = _a.theme, theme = _c === void 0 ? config_1.defaultValues.theme : _c, _d = _a.lang, lang = _d === void 0 ? config_1.defaultValues.lang : _d, _e = _a.dateFormat, dateFormat = _e === void 0 ? config_1.defaultValues.dateFormat : _e, _f = _a.collapse, collapse = _f === void 0 ? config_1.defaultValues.collapse : _f, _g = _a.withoutDay, withoutDay = _g === void 0 ? config_1.defaultValues.withoutDay : _g, customStyles = _a.customStyles, children = _a.children;
    var elements = (_b = react_1.Children.map(children, function (child) {
        return child.type === container_1.Container ? child : null;
    })) === null || _b === void 0 ? void 0 : _b.filter(Boolean);
    return (react_1.default.createElement(main_1.TimelineWrapper, null,
        react_1.default.createElement(main_1.TimelineWrapperInner, null,
            react_1.default.createElement(config_context_1.ConfigProvider, { config: { theme: theme, lang: lang, dateFormat: dateFormat, collapse: collapse, customStyles: customStyles, withoutDay: withoutDay } },
                react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme }, elements)))));
};
exports.Timeline = Timeline;
