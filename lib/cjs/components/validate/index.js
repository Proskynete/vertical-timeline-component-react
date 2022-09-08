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
exports.Validate = void 0;
var react_1 = __importStar(require("react"));
var error_message_1 = require("../error-message");
var Validate = function (_a) {
    var children = _a.children, componentToValidate = _a.componentToValidate;
    var count = react_1.Children.count(children);
    if (count === 0)
        return react_1.default.createElement(error_message_1.ErrorMessage, { type: "atLeast", component: componentToValidate.name });
    if (count === 1 && children.type !== componentToValidate)
        return react_1.default.createElement(error_message_1.ErrorMessage, { type: "onlySupports", component: componentToValidate.name });
    var elements = react_1.Children.map(children, function (element) {
        return element.type === componentToValidate ? element : null;
    });
    return react_1.default.createElement(react_1.default.Fragment, null, elements);
};
exports.Validate = Validate;
