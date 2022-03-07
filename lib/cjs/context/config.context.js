"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigContext = void 0;
var react_1 = require("react");
var config_1 = require("../config");
exports.ConfigContext = (0, react_1.createContext)(config_1.defaultValues);
