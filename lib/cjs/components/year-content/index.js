"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var react_1 = __importStar(require("react"));
var config_context_1 = require("../../context/config.context");
var transform_date_helper_1 = require("../../helpers/transform-date.helper");
var config_1 = require("../../config");
var main_1 = require("../../styles/main");
var YearContent = function (_a) {
    var startDate = _a.startDate, _b = _a.endDate, endDate = _b === void 0 ? '' : _b, _c = _a.currentYear, currentYear = _c === void 0 ? false : _c;
    var _d = react_1.useContext(config_context_1.ConfigContext), lang = _d.lang, dateFormat = _d.dateFormat;
    var d = new Date();
    var _year = d.getFullYear();
    var _currentYear = currentYear ? (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("time", { dateTime: _year.toString() }, _year))) : null;
    var _endDate = endDate !== '' ? (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(main_1.YearSpan, null, config_1.mapText[lang].to),
        react_1.default.createElement("time", { dateTime: endDate }, transform_date_helper_1.mapDate[lang][dateFormat](endDate)))) : null;
    var _startDate = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(main_1.YearSpan, null, config_1.mapText[lang].from),
        react_1.default.createElement("time", { dateTime: startDate }, transform_date_helper_1.mapDate[lang][dateFormat](startDate))));
    return (react_1.default.createElement(main_1.YearWrapper, { format: dateFormat, lang: lang },
        _currentYear,
        _endDate,
        _startDate));
};
exports.default = YearContent;
