"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigContext = void 0;
var react_1 = require("react");
var config_1 = require("../config");
exports.ConfigContext = react_1.createContext({
    lang: config_1.defaultValues.lang,
    dateFormat: config_1.defaultValues.dateFormat,
});
