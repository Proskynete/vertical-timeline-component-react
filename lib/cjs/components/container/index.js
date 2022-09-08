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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
var react_1 = __importStar(require("react"));
var useConfig_1 = require("../../hooks/useConfig");
var main_1 = require("../../styles/main");
var content_1 = require("../content");
var year_content_1 = __importDefault(require("../year-content"));
var Container = function (_a) {
    var _b, _c;
    var title = _a.title, startDate = _a.startDate, endDate = _a.endDate, today = _a.today, withoutDay = _a.withoutDay, children = _a.children;
    var config = (0, useConfig_1.useConfig)().config;
    var elements = (_b = react_1.Children.map(children, function (child) {
        return child.type === content_1.Content ? child : null;
    })) === null || _b === void 0 ? void 0 : _b.filter(Boolean);
    return (react_1.default.createElement(main_1.ContainerWrapper, null,
        react_1.default.createElement(year_content_1.default, { startDate: startDate, endDate: endDate, today: today, withoutDay: withoutDay }),
        react_1.default.createElement(main_1.BodyWrapper, null,
            react_1.default.createElement(main_1.Title, { style: (_c = config.customStyles) === null || _c === void 0 ? void 0 : _c.title }, title),
            react_1.default.createElement(main_1.BodyInner, null, elements))));
};
exports.Container = Container;
