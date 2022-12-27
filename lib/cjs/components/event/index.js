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
exports.Event = void 0;
var react_1 = __importStar(require("react"));
var useConfig_1 = require("../../hooks/useConfig");
var main_1 = require("../../styles/main");
var Event = function (_a) {
    var _b;
    var defaultClosed = _a.defaultClosed, description = _a.description, title = _a.title;
    var config = (0, useConfig_1.useConfig)().config;
    var _c = (0, react_1.useState)(!title ? true : !defaultClosed), show = _c[0], setShow = _c[1];
    var isCollapsed = config.collapse;
    var handleSetShow = function () {
        setShow(!show);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        !!title && (react_1.default.createElement(main_1.EventTitle, { collapse: isCollapsed, onClick: function () {
                if (isCollapsed)
                    handleSetShow();
            }, style: (_b = config.customStyles) === null || _b === void 0 ? void 0 : _b.event },
            isCollapsed && react_1.default.createElement(main_1.Icon, { isShowing: show }, "\u203A"),
            title)),
        show && (react_1.default.createElement(main_1.DescriptionWrapper, null, description.map(function (text, i) {
            var _a;
            return (react_1.default.createElement(main_1.Description, { key: i, symbol: config.descriptionSymbol, style: (_a = config.customStyles) === null || _a === void 0 ? void 0 : _a.description }, text));
        })))));
};
exports.Event = Event;
