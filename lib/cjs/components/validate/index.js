"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validate = void 0;
var react_1 = __importDefault(require("react"));
var error_message_1 = require("../error-message");
var Validate = function (_a) {
    var children = _a.children, componentToValidate = _a.componentToValidate, otherProps = __rest(_a, ["children", "componentToValidate"]);
    var count = children && react_1.default.Children.count(children);
    if (count === 0 || !children)
        return react_1.default.createElement(error_message_1.ErrorMessage, { type: "atLeast", component: componentToValidate.name });
    var elements = react_1.default.Children.map(children, function (element) {
        return element.type === componentToValidate ? (react_1.default.cloneElement(element, otherProps)) : (react_1.default.createElement(error_message_1.ErrorMessage, { type: "onlySupports", component: componentToValidate.name }));
    });
    return react_1.default.createElement(react_1.default.Fragment, null, elements);
};
exports.Validate = Validate;
