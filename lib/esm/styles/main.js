var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { clearString } from '../helpers/text.helper';
export var TimelineWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\theight: 100%;\n\tposition: relative;\n\twidth: 100%;\n"], ["\n\tdisplay: flex;\n\theight: 100%;\n\tposition: relative;\n\twidth: 100%;\n"])));
export var TimelineWrapperInner = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tpadding: 15px 10px;\n\twidth: 100%;\n"], ["\n\tpadding: 15px 10px;\n\twidth: 100%;\n"])));
export var ContainerWrapper = styled.section(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\talign-items: baseline;\n\tdisplay: flex;\n\tposition: relative;\n"], ["\n\talign-items: baseline;\n\tdisplay: flex;\n\tposition: relative;\n"])));
var enumWidth = function () { return ({
    'only-number_es': '85',
    'only-number_en': '85',
    'only-number_de': '85',
    'only-number_tr': '85',
    'only-number_zh': '85',
    short_es: '85',
    short_en: '90',
    short_de: '95',
    short_tr: '95',
    short_zh: '115',
    'with-weekday_es': '125',
    'with-weekday_en': '125',
    'with-weekday_de': '130',
    'with-weekday_tr': '130',
    'with-weekday_zh': '140',
    full_es: '125',
    full_en: '125',
    full_de: '125',
    full_tr: '125',
    full_zh: '125',
}); };
export var YearWrapper = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\talign-items: flex-end;\n\tcolor: ", ";\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-size: 0.875rem;\n\tfont-weight: normal;\n\theight: max-content;\n\tmargin: 0;\n\tmax-width: ", ";\n\tmin-width: ", ";\n"], ["\n\talign-items: flex-end;\n\tcolor: ", ";\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-size: 0.875rem;\n\tfont-weight: normal;\n\theight: max-content;\n\tmargin: 0;\n\tmax-width: ", ";\n\tmin-width: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.yearColor;
}, function (_a) {
    var format = _a.format, lang = _a.lang;
    return "".concat(enumWidth()["".concat(format, "_").concat(clearString(lang).split(' ')[0])], "px");
}, function (_a) {
    var format = _a.format, lang = _a.lang;
    return "".concat(enumWidth()["".concat(format, "_").concat(clearString(lang).split(' ')[0])], "px");
});
export var YearSpan = styled.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tfont-size: 0.625rem;\n\tmargin: 3px 0 0;\n\tpadding: 0;\n"], ["\n\tfont-size: 0.625rem;\n\tmargin: 3px 0 0;\n\tpadding: 0;\n"])));
export var BodyWrapper = styled.article(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tmin-height: 75px;\n\tpadding-bottom: 15px;\n\tpadding-left: 25px;\n\tposition: relative;\n\n\t&:after,\n\t", ":last-of-type &:last-of-type:after {\n\t\tbackground-color: ", ";\n\t\tbottom: 0;\n\t\tbox-sizing: content-box;\n\t\tcontent: '';\n\t\theight: 100%;\n\t\tleft: 10px;\n\t\tposition: absolute;\n\t\ttop: 5px;\n\t\twidth: 2px;\n\t\tz-index: 1;\n\t}\n\n\t", ":last-of-type &:last-of-type:after {\n\t\tbox-sizing: content-box;\n\t\tdisplay: none;\n\t}\n"], ["\n\tmin-height: 75px;\n\tpadding-bottom: 15px;\n\tpadding-left: 25px;\n\tposition: relative;\n\n\t&:after,\n\t", ":last-of-type &:last-of-type:after {\n\t\tbackground-color: ", ";\n\t\tbottom: 0;\n\t\tbox-sizing: content-box;\n\t\tcontent: '';\n\t\theight: 100%;\n\t\tleft: 10px;\n\t\tposition: absolute;\n\t\ttop: 5px;\n\t\twidth: 2px;\n\t\tz-index: 1;\n\t}\n\n\t", ":last-of-type &:last-of-type:after {\n\t\tbox-sizing: content-box;\n\t\tdisplay: none;\n\t}\n"])), ContainerWrapper, function (props) { return props.theme.lineColor; }, ContainerWrapper);
export var Title = styled.h2(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\tcolor: ", ";\n\tcursor: ", ";\n\tdisplay: inline-block;\n\tfont-size: 1rem;\n\tfont-weight: bold;\n\tmargin: 0;\n\n\t&:after {\n\t\tbackground-color: ", ";\n\t\tborder-radius: 50%;\n\t\tborder: 2px solid ", ";\n\t\tbox-sizing: content-box;\n\t\tcontent: '';\n\t\theight: 6px;\n\t\tleft: 6px;\n\t\tposition: absolute;\n\t\ttop: 4px;\n\t\twidth: 6px;\n\t\tz-index: 2;\n\t}\n\n\ta {\n\t\tcolor: ", ";\n\t\tcursor: pointer;\n\t\ttext-decoration: none;\n\t}\n"], ["\n\tcolor: ", ";\n\tcursor: ", ";\n\tdisplay: inline-block;\n\tfont-size: 1rem;\n\tfont-weight: bold;\n\tmargin: 0;\n\n\t&:after {\n\t\tbackground-color: ", ";\n\t\tborder-radius: 50%;\n\t\tborder: 2px solid ", ";\n\t\tbox-sizing: content-box;\n\t\tcontent: '';\n\t\theight: 6px;\n\t\tleft: 6px;\n\t\tposition: absolute;\n\t\ttop: 4px;\n\t\twidth: 6px;\n\t\tz-index: 2;\n\t}\n\n\ta {\n\t\tcolor: ", ";\n\t\tcursor: pointer;\n\t\ttext-decoration: none;\n\t}\n"])), function (props) { return props.theme.titleColor; }, function (props) { return (props.collapse ? 'pointer' : 'default'); }, function (props) { return props.theme.dotColor; }, function (props) { return props.theme.borderDotColor; }, function (props) { return props.theme.titleColor; });
export var Subtitle = styled.p(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\tcolor: ", ";\n\tdisplay: block;\n\tfont-size: 0.875rem;\n\tmargin: 0;\n\tpadding: 0;\n"], ["\n\tcolor: ", ";\n\tdisplay: block;\n\tfont-size: 0.875rem;\n\tmargin: 0;\n\tpadding: 0;\n"])), function (props) { return props.theme.subtitleColor; });
export var BodyInner = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n\tfont-size: 1rem;\n\tlist-style-type: none;\n\tmargin: 5px 0 16px;\n\tmax-width: 100%;\n\tpadding: 0;\n\n\t&:last-child {\n\t\tmargin-bottom: 0;\n\t}\n"], ["\n\tfont-size: 1rem;\n\tlist-style-type: none;\n\tmargin: 5px 0 16px;\n\tmax-width: 100%;\n\tpadding: 0;\n\n\t&:last-child {\n\t\tmargin-bottom: 0;\n\t}\n"])));
export var Icon = styled.i(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n\tfont-style: normal;\n\tmargin-right: 3px;\n\ttransform: rotate(", ");\n\n\t@media (prefers-reduced-motion: no-preference) {\n\t\ttransition: transform 0.2s ease-in-out;\n\t}\n"], ["\n\tfont-style: normal;\n\tmargin-right: 3px;\n\ttransform: rotate(", ");\n\n\t@media (prefers-reduced-motion: no-preference) {\n\t\ttransition: transform 0.2s ease-in-out;\n\t}\n"])), function (props) { return (props.isShowing ? '90deg' : '0deg'); });
export var EventTitle = styled.h3(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n\talign-content: center;\n\talign-items: flex-start;\n\tcolor: ", ";\n\tcursor: ", ";\n\tdisplay: flex;\n\tfont-size: 0.875rem;\n\tfont-weight: bold;\n\tmargin: 0;\n\tmax-width: 100%;\n\twidth: max-content;\n\n\t&:not(:first-child) {\n\t\tmargin-top: 5px;\n\t}\n"], ["\n\talign-content: center;\n\talign-items: flex-start;\n\tcolor: ", ";\n\tcursor: ", ";\n\tdisplay: flex;\n\tfont-size: 0.875rem;\n\tfont-weight: bold;\n\tmargin: 0;\n\tmax-width: 100%;\n\twidth: max-content;\n\n\t&:not(:first-child) {\n\t\tmargin-top: 5px;\n\t}\n"])), function (props) { return props.theme.eventColor; }, function (props) { return (props.collapse ? 'pointer' : 'default'); });
export var DescriptionWrapper = styled.ul(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n\tlist-style-type: none;\n\tmargin: 0;\n\tpadding-left: 10px;\n"], ["\n\tlist-style-type: none;\n\tmargin: 0;\n\tpadding-left: 10px;\n"])));
export var Description = styled.li(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n\tcolor: ", ";\n\tfont-size: 0.875rem;\n\tmargin: 3px 0 0;\n\n\t&:before {\n\t\tcontent: '", "';\n\t\tmargin-right: 5px;\n\t}\n"], ["\n\tcolor: ", ";\n\tfont-size: 0.875rem;\n\tmargin: 3px 0 0;\n\n\t&:before {\n\t\tcontent: '", "';\n\t\tmargin-right: 5px;\n\t}\n"])), function (props) { return props.theme.descriptionColor; }, function (props) { return props.symbol; });
export var TextErrorMessage = styled.p(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n\tcolor: ", ";\n\tfont-size: 0.875rem;\n\ttext-align: center;\n\twidth: 100%;\n\n\tcode {\n\t\tbackground-color: ", ";\n\t\tborder-radius: 5px;\n\t\tcolor: ", ";\n\t\tdisplay: inline-block;\n\t\tfont-size: 0.875rem;\n\t\tpadding: 3px 5px;\n\t}\n"], ["\n\tcolor: ", ";\n\tfont-size: 0.875rem;\n\ttext-align: center;\n\twidth: 100%;\n\n\tcode {\n\t\tbackground-color: ", ";\n\t\tborder-radius: 5px;\n\t\tcolor: ", ";\n\t\tdisplay: inline-block;\n\t\tfont-size: 0.875rem;\n\t\tpadding: 3px 5px;\n\t}\n"])), function (props) { return props.theme.descriptionColor; }, function (props) { return props.theme.dotColor; }, function (props) { return props.theme.eventColor; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
