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
var react_1 = __importStar(require("react"));
var config_context_1 = require("../../context/config.context");
var config_1 = require("../../config");
var main_1 = require("../../styles/main");
var transform_date_helper_1 = require("../../helpers/transform-date.helper");
var text_helper_1 = require("../../helpers/text.helper");
var YearContent = function (_a) {
    var startDate = _a.startDate, endDate = _a.endDate, _b = _a.currentYear, currentYear = _b === void 0 ? false : _b;
    var _c = (0, react_1.useContext)(config_context_1.ConfigContext), lang = _c.lang, dateFormat = _c.dateFormat;
    var _lang = (0, text_helper_1.clearString)(lang).split(' ')[0];
    console.log('_lang: ', _lang);
    var d = new Date();
    var _year = d.getFullYear();
    var _currentYear = currentYear && (react_1.default.createElement("time", { dateTime: _year.toString() }, _year));
    var _endDate = endDate && (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(main_1.YearSpan, null, config_1.mapText[_lang].to),
        react_1.default.createElement("time", { dateTime: endDate }, (0, transform_date_helper_1.transformDate)({ date: endDate, lang: _lang, type: dateFormat }))));
    var _startDate = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(main_1.YearSpan, null, config_1.mapText[_lang].from),
        react_1.default.createElement("time", { dateTime: startDate }, (0, transform_date_helper_1.transformDate)({ date: startDate, lang: _lang, type: dateFormat }))));
    return (react_1.default.createElement(main_1.YearWrapper, { format: dateFormat, lang: lang },
        _currentYear,
        _endDate,
        _startDate));
};
exports.default = YearContent;
