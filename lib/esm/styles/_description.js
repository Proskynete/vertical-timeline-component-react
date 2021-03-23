var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var Subtitle = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tcolor: ", ";\n\tfont-size: 14px;\n\tfont-style: italic;\n\tfont-weight: 400;\n\n\t&:not(:first-of-type) {\n\t\tmargin-top: 10px;\n\t}\n"], ["\n\tcolor: ", ";\n\tfont-size: 14px;\n\tfont-style: italic;\n\tfont-weight: 400;\n\n\t&:not(:first-of-type) {\n\t\tmargin-top: 10px;\n\t}\n"])), function (props) { return props.theme.subtitleColor; });
export var DescriptionText = styled.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tcolor: ", ";\n\n\t&:not(:first-of-type) {\n\t\tmargin-top: 3px;\n\t}\n"], ["\n\tcolor: ", ";\n\n\t&:not(:first-of-type) {\n\t\tmargin-top: 3px;\n\t}\n"])), function (props) { return props.theme.textColor; });
var templateObject_1, templateObject_2;
