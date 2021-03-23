"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YearSpan = exports.YearWrapper = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.YearWrapper = styled_components_1.default.p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\talign-items: flex-end;\n\tcolor: ", ";\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-size: 14px;\n\tfont-weight: 400;\n\theight: max-content;\n\tmargin: 0;\n\tmin-width: ", ";\n"], ["\n\talign-items: flex-end;\n\tcolor: ", ";\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-size: 14px;\n\tfont-weight: 400;\n\theight: max-content;\n\tmargin: 0;\n\tmin-width: ",
    ";\n"])), function (props) { return props.theme.yearColor; }, function (props) {
    return props.format === 'L'
        ? '80px'
        : props.format === 'l'
            ? '80px'
            : props.lang === 'en'
                ? '90px'
                : '105px';
});
exports.YearSpan = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tfont-size: 10px;\n\tmargin: 3px 0 0 0;\n\tpadding: 0;\n"], ["\n\tfont-size: 10px;\n\tmargin: 3px 0 0 0;\n\tpadding: 0;\n"])));
var templateObject_1, templateObject_2;
