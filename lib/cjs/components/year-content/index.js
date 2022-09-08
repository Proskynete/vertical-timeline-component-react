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
    var startDate = _a.startDate, endDate = _a.endDate, _b = _a.today, today = _b === void 0 ? false : _b;
    var _c = (0, useConfig_1.useConfig)().config, lang = _c.lang, dateFormat = _c.dateFormat, customStyles = _c.customStyles;
    var _today = today && (react_1.default.createElement("time", { "aria-hidden": true, dateTime: (0, transform_date_helper_1.getAccessibilityDate)({
            date: new Date(),
            lang: lang,
        }) }, new Date().getFullYear()));
    var _endDate = endDate && (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(main_1.YearSpan, { "aria-hidden": true }, config_1.mapText[lang].to),
        react_1.default.createElement("time", { "aria-hidden": true, dateTime: (0, transform_date_helper_1.getAccessibilityDate)({ date: endDate, lang: lang }) }, (0, transform_date_helper_1.transformDate)({ date: endDate, lang: lang, type: dateFormat }))));
    var _startDate = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(main_1.YearSpan, { "aria-hidden": true }, config_1.mapText[lang].from),
        react_1.default.createElement("time", { "aria-hidden": true, dateTime: (0, transform_date_helper_1.getAccessibilityDate)({ date: startDate, lang: lang }) }, (0, transform_date_helper_1.transformDate)({ date: startDate, lang: lang, type: dateFormat }))));
    return (react_1.default.createElement(main_1.YearWrapper, { format: dateFormat, lang: lang, "aria-label": (0, text_helper_1.getAriaText)({
            from: (0, transform_date_helper_1.transformDate)({ date: startDate, lang: lang, type: 'full' }),
            to: (0, transform_date_helper_1.transformDate)({
                date: endDate || new Date(),
                lang: lang,
                type: 'full',
            }),
            today: today,
            lang: lang,
        }), style: customStyles === null || customStyles === void 0 ? void 0 : customStyles.date },
        _today,
        _endDate,
        _startDate));
};
exports.default = YearContent;
