"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var config_1 = require("../../config");
var main_1 = require("../../styles/main");
var transform_date_helper_1 = require("../../helpers/transform-date.helper");
var text_helper_1 = require("../../helpers/text.helper");
var useConfig_1 = require("../../hooks/useConfig");
var YearContent = function (_a) {
    var _b;
    var _c = _a.active, active = _c === void 0 ? false : _c, endDate = _a.endDate, startDate = _a.startDate, withoutDay = _a.withoutDay;
    var config = (0, useConfig_1.useConfig)().config;
    var _active = active && (react_1.default.createElement("time", { "aria-hidden": true, dateTime: (0, transform_date_helper_1.getAccessibilityDate)({
            date: new Date(),
            lang: config.lang,
            withoutDay: config.withoutDay || withoutDay,
        }) }, new Date().getFullYear()));
    var _endDate = endDate && (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(main_1.YearSpan, { "aria-hidden": true }, config_1.mapText[config.lang].to),
        react_1.default.createElement("time", { "aria-hidden": true, dateTime: (0, transform_date_helper_1.getAccessibilityDate)({
                date: endDate,
                lang: config.lang,
                withoutDay: config.withoutDay || withoutDay,
            }) }, (0, transform_date_helper_1.transformDate)({
            date: endDate,
            lang: config.lang,
            type: config.dateFormat,
            withoutDay: config.withoutDay || withoutDay,
        }))));
    var _startDate = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(main_1.YearSpan, { "aria-hidden": true }, config_1.mapText[config.lang].from),
        react_1.default.createElement("time", { "aria-hidden": true, dateTime: (0, transform_date_helper_1.getAccessibilityDate)({
                date: startDate,
                lang: config.lang,
                withoutDay: config.withoutDay || withoutDay,
            }) }, (0, transform_date_helper_1.transformDate)({
            date: startDate,
            lang: config.lang,
            type: config.dateFormat,
            withoutDay: config.withoutDay || withoutDay,
        }))));
    return (react_1.default.createElement(main_1.YearWrapper, { format: config.dateFormat, lang: config.lang, "aria-label": (0, text_helper_1.getAriaText)({
            from: (0, transform_date_helper_1.transformDate)({
                date: startDate,
                lang: config.lang,
                type: 'full',
                withoutDay: config.withoutDay || withoutDay,
            }),
            to: (0, transform_date_helper_1.transformDate)({
                date: endDate || new Date(),
                lang: config.lang,
                type: 'full',
                withoutDay: config.withoutDay || withoutDay,
            }),
            lang: config.lang,
        }), style: (_b = config.customStyles) === null || _b === void 0 ? void 0 : _b.date },
        _active,
        _endDate,
        _startDate));
};
exports.default = YearContent;
