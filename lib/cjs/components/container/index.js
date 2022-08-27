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
var react_1 = __importStar(require("react"));
var transform_date_helper_1 = require("../../helpers/transform-date.helper");
var useConfig_1 = require("../../hooks/useConfig");
var main_1 = require("../../styles/main");
var year_content_1 = __importDefault(require("../year-content"));
var Container = function (_a) {
    var title = _a.title, startDate = _a.startDate, endDate = _a.endDate, currentYear = _a.currentYear, children = _a.children;
    var config = (0, useConfig_1.useConfig)().config;
    var _b = (0, react_1.useState)(true), show = _b[0], setShow = _b[1];
    var handleSetShow = function () {
        setShow(!show);
    };
    return (react_1.default.createElement(main_1.ContainerWrapper, null,
        show ? (react_1.default.createElement(year_content_1.default, { startDate: startDate, endDate: endDate, currentYear: currentYear })) : (react_1.default.createElement(main_1.YearWrapper, { format: config.dateFormat, lang: config.lang })),
        react_1.default.createElement(main_1.BodyContent, null,
            react_1.default.createElement(main_1.BodyWrapper, null,
                react_1.default.createElement("div", { style: {
                        display: 'flex',
                    } },
                    react_1.default.createElement(main_1.Title, { onClick: handleSetShow, collapse: config.collapse }, title),
                    !show && (react_1.default.createElement("p", { style: {
                            margin: '0 0 0 8px',
                            fontSize: '12px',
                            alignSelf: 'self-end',
                        } },
                        "(",
                        (0, transform_date_helper_1.transformDate)({
                            date: startDate,
                            lang: config.lang,
                            type: config.dateFormat,
                        }),
                        ' ',
                        "-",
                        ' ',
                        endDate
                            ? (0, transform_date_helper_1.transformDate)({
                                date: endDate,
                                lang: config.lang,
                                type: config.dateFormat,
                            })
                            : (0, transform_date_helper_1.transformDate)({
                                date: new Date().toISOString(),
                                lang: config.lang,
                                type: config.dateFormat,
                            }),
                        ")"))),
                show && react_1.default.createElement(main_1.BodyInner, null, children)))));
};
exports.default = Container;
