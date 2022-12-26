"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timeline = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = require("styled-components");
var config_1 = require("../../config");
var config_context_1 = require("../../context/config.context");
var main_1 = require("../../styles/main");
var events_1 = require("../events");
var validate_1 = require("../validate");
var Timeline = function (_a) {
    var children = _a.children, _b = _a.collapse, collapse = _b === void 0 ? config_1.defaultValues.collapse : _b, customStyles = _a.customStyles, _c = _a.dateFormat, dateFormat = _c === void 0 ? config_1.defaultValues.dateFormat : _c, _d = _a.descriptionSymbol, descriptionSymbol = _d === void 0 ? config_1.defaultValues.descriptionSymbol : _d, _e = _a.lang, lang = _e === void 0 ? config_1.defaultValues.lang : _e, _f = _a.theme, theme = _f === void 0 ? config_1.defaultValues.theme : _f, _g = _a.withoutDay, withoutDay = _g === void 0 ? config_1.defaultValues.withoutDay : _g;
    return (react_1.default.createElement(main_1.TimelineWrapper, null,
        react_1.default.createElement(main_1.TimelineWrapperInner, null,
            react_1.default.createElement(config_context_1.ConfigProvider, { config: {
                    theme: theme,
                    lang: lang,
                    dateFormat: dateFormat,
                    collapse: collapse,
                    customStyles: customStyles,
                    descriptionSymbol: descriptionSymbol,
                    withoutDay: withoutDay,
                } },
                react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme },
                    react_1.default.createElement(validate_1.Validate, { componentToValidate: events_1.Events }, children))))));
};
exports.Timeline = Timeline;
