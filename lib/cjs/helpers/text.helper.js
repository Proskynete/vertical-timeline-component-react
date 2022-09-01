"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAriaText = exports.clearString = void 0;
var config_1 = require("../config");
var clearString = function (str) { return str.replace(/-/g, ' ').replace(/_/g, ' '); };
exports.clearString = clearString;
var getAriaText = function (_a) {
    var from = _a.from, to = _a.to, lang = _a.lang;
    return "".concat(config_1.mapText[lang].from, " ").concat(from, " ").concat(config_1.mapText[lang].to, " ").concat(to);
};
exports.getAriaText = getAriaText;
