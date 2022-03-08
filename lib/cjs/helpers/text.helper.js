"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearString = void 0;
var clearString = function (str) {
    return str.replace(/-/g, ' ').replace(/_/g, ' ');
};
exports.clearString = clearString;
