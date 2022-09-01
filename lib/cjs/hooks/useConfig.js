"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useConfig = void 0;
var react_1 = require("react");
var config_context_1 = require("../context/config.context");
var useConfig = function () {
    var context = (0, react_1.useContext)(config_context_1.ConfigContext);
    return context;
};
exports.useConfig = useConfig;
