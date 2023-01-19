"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
var react_1 = __importDefault(require("react"));
var useConfig_1 = require("../../hooks/useConfig");
var main_1 = require("../../styles/main");
var event_1 = require("../event");
var validate_1 = require("../validate");
var year_content_1 = __importDefault(require("../year-content"));
var Events = function (_a) {
    var _b, _c;
    var active = _a.active, children = _a.children, _d = _a.defaultClosed, defaultClosed = _d === void 0 ? false : _d, endDate = _a.endDate, startDate = _a.startDate, subtitle = _a.subtitle, title = _a.title, withoutDay = _a.withoutDay;
    var config = (0, useConfig_1.useConfig)().config;
    console.log(typeof title);
    return (react_1.default.createElement(main_1.ContainerWrapper, null,
        react_1.default.createElement(year_content_1.default, { startDate: startDate, endDate: endDate, active: active, withoutDay: withoutDay }),
        react_1.default.createElement(main_1.BodyWrapper, null,
            react_1.default.createElement(main_1.Title, { style: (_b = config.customStyles) === null || _b === void 0 ? void 0 : _b.title }, typeof title === 'function' ? title() : title),
            subtitle && react_1.default.createElement(main_1.Subtitle, { style: (_c = config.customStyles) === null || _c === void 0 ? void 0 : _c.subtitle }, subtitle),
            react_1.default.createElement(main_1.BodyInner, null,
                react_1.default.createElement(validate_1.Validate, { componentToValidate: event_1.Event, defaultClosed: defaultClosed }, children)))));
};
exports.Events = Events;
