"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
var react_1 = __importDefault(require("react"));
var useConfig_1 = require("../../hooks/useConfig");
var main_1 = require("../../styles/main");
var content_1 = require("../content");
var validate_1 = require("../validate");
var year_content_1 = __importDefault(require("../year-content"));
var Container = function (_a) {
    var _b;
    var title = _a.title, startDate = _a.startDate, endDate = _a.endDate, today = _a.today, withoutDay = _a.withoutDay, children = _a.children;
    var config = (0, useConfig_1.useConfig)().config;
    return (react_1.default.createElement(main_1.ContainerWrapper, null,
        react_1.default.createElement(year_content_1.default, { startDate: startDate, endDate: endDate, today: today, withoutDay: withoutDay }),
        react_1.default.createElement(main_1.BodyWrapper, null,
            react_1.default.createElement(main_1.Title, { style: (_b = config.customStyles) === null || _b === void 0 ? void 0 : _b.title }, title),
            react_1.default.createElement(main_1.BodyInner, null,
                react_1.default.createElement(validate_1.Validate, { componentToValidate: content_1.Content }, children)))));
};
exports.Container = Container;
