"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescriptionText = exports.Subtitle = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Subtitle = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tcolor: ", ";\n\tfont-size: 14px;\n\tfont-style: italic;\n\tfont-weight: 400;\n\n\t&:not(:first-of-type) {\n\t\tmargin-top: 10px;\n\t}\n"], ["\n\tcolor: ", ";\n\tfont-size: 14px;\n\tfont-style: italic;\n\tfont-weight: 400;\n\n\t&:not(:first-of-type) {\n\t\tmargin-top: 10px;\n\t}\n"])), function (props) { return props.theme.subtitleColor; });
exports.DescriptionText = styled_components_1.default.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tcolor: ", ";\n\n\t&:not(:first-of-type) {\n\t\tmargin-top: 3px;\n\t}\n"], ["\n\tcolor: ", ";\n\n\t&:not(:first-of-type) {\n\t\tmargin-top: 3px;\n\t}\n"])), function (props) { return props.theme.textColor; });
var templateObject_1, templateObject_2;
