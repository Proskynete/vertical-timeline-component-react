var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { clearString } from '../helpers/text.helper';
export var TimelineWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\theight: 100%;\n\tposition: relative;\n\twidth: 100%;\n"], ["\n\tdisplay: flex;\n\theight: 100%;\n\tposition: relative;\n\twidth: 100%;\n"])));
export var TimelineWrapperInner = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tpadding: 15px 10px;\n\twidth: 100%;\n"], ["\n\tpadding: 15px 10px;\n\twidth: 100%;\n"])));
export var ContainerWrapper = styled.section(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\talign-items: baseline;\n\tdisplay: flex;\n\tposition: relative;\n"], ["\n\talign-items: baseline;\n\tdisplay: flex;\n\tposition: relative;\n"])));
export var BodyContent = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
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
export var YearWrapper = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\talign-items: flex-end;\n\tcolor: ", ";\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-size: 14px;\n\tfont-weight: 400;\n\theight: max-content;\n\tmargin: 0;\n\tmax-width: ", ";\n\tmin-width: ", ";\n\ttext-align: end;\n"], ["\n\talign-items: flex-end;\n\tcolor: ", ";\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-size: 14px;\n\tfont-weight: 400;\n\theight: max-content;\n\tmargin: 0;\n\tmax-width: ", ";\n\tmin-width: ", ";\n\ttext-align: end;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.yearColor;
}, function (_a) {
    var format = _a.format, lang = _a.lang;
    return "".concat(enumWidth()["".concat(format, "_").concat(clearString(lang).split(' ')[0])], "px");
}, function (_a) {
    var format = _a.format, lang = _a.lang;
    return "".concat(enumWidth()["".concat(format, "_").concat(clearString(lang).split(' ')[0])], "px");
});
export var YearSpan = styled.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tfont-size: 10px;\n\tmargin: 3px 0 0 0;\n\tpadding: 0;\n"], ["\n\tfont-size: 10px;\n\tmargin: 3px 0 0 0;\n\tpadding: 0;\n"])));
export var BodyWrapper = styled.article(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\tpadding-bottom: 20px;\n\tpadding-left: 25px;\n\tposition: relative;\n\n\t&:after,\n\t", ":last-of-type &:last-of-type:after {\n\t\tbackground-color: ", ";\n\t\tbottom: 0;\n\t\tbox-sizing: content-box;\n\t\tcontent: '';\n\t\theight: 100%;\n\t\tleft: 10px;\n\t\ttop: 5px;\n\t\tposition: absolute;\n\t\twidth: 2px;\n\t\tz-index: 1;\n\t}\n\n\t", ":last-of-type &:last-of-type:after {\n\t\tbox-sizing: content-box;\n\t\tdisplay: none;\n\t}\n"], ["\n\tpadding-bottom: 20px;\n\tpadding-left: 25px;\n\tposition: relative;\n\n\t&:after,\n\t", ":last-of-type &:last-of-type:after {\n\t\tbackground-color: ", ";\n\t\tbottom: 0;\n\t\tbox-sizing: content-box;\n\t\tcontent: '';\n\t\theight: 100%;\n\t\tleft: 10px;\n\t\ttop: 5px;\n\t\tposition: absolute;\n\t\twidth: 2px;\n\t\tz-index: 1;\n\t}\n\n\t", ":last-of-type &:last-of-type:after {\n\t\tbox-sizing: content-box;\n\t\tdisplay: none;\n\t}\n"])), ContainerWrapper, function (props) { return props.theme.lineColor; }, ContainerWrapper);
export var Title = styled.h2(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\tcolor: ", ";\n\tcursor: ", ";\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tmargin: 0;\n\n\t&:after {\n\t\tbackground-color: ", ";\n\t\tborder: 2px solid ", ";\n\t\tborder-radius: 50%;\n\t\tbox-sizing: content-box;\n\t\tcontent: '';\n\t\theight: 6px;\n\t\tleft: 6px;\n\t\tposition: absolute;\n\t\ttop: 4px;\n\t\twidth: 6px;\n\t\tz-index: 2;\n\t}\n"], ["\n\tcolor: ", ";\n\tcursor: ", ";\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tmargin: 0;\n\n\t&:after {\n\t\tbackground-color: ", ";\n\t\tborder: 2px solid ", ";\n\t\tborder-radius: 50%;\n\t\tbox-sizing: content-box;\n\t\tcontent: '';\n\t\theight: 6px;\n\t\tleft: 6px;\n\t\tposition: absolute;\n\t\ttop: 4px;\n\t\twidth: 6px;\n\t\tz-index: 2;\n\t}\n"])), function (props) { return props.theme.titleColor; }, function (props) { return (props.collapse ? 'pointer' : 'default'); }, function (props) { return props.theme.dotColor; }, function (props) { return props.theme.borderDotColor; });
export var BodyInner = styled.ul(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n\tfont-size: 16px;\n\tlist-style-type: none;\n\tmargin: 5px 0 16px;\n\tmax-width: 100%;\n\tpadding: 0;\n\n\t&:last-child {\n\t\tmargin-bottom: 0;\n\t}\n"], ["\n\tfont-size: 16px;\n\tlist-style-type: none;\n\tmargin: 5px 0 16px;\n\tmax-width: 100%;\n\tpadding: 0;\n\n\t&:last-child {\n\t\tmargin-bottom: 0;\n\t}\n"])));
export var Subtitle = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n\tcolor: ", ";\n\tfont-size: 14px;\n\tfont-style: italic;\n\tfont-weight: 400;\n\n\t&:not(:first-of-type) {\n\t\tmargin-top: 10px;\n\t}\n"], ["\n\tcolor: ", ";\n\tfont-size: 14px;\n\tfont-style: italic;\n\tfont-weight: 400;\n\n\t&:not(:first-of-type) {\n\t\tmargin-top: 10px;\n\t}\n"])), function (props) { return props.theme.subtitleColor; });
export var DescriptionText = styled.li(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n\tcolor: ", ";\n\n\t&:not(:first-of-type) {\n\t\tmargin-top: 3px;\n\t}\n"], ["\n\tcolor: ", ";\n\n\t&:not(:first-of-type) {\n\t\tmargin-top: 3px;\n\t}\n"])), function (props) { return props.theme.textColor; });
export var DescriptionSubtitle = styled.li(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n\tcolor: ", ";\n\tfont-size: 14px;\n\tfont-style: italic;\n\tfont-weight: 400;\n\n\t&:not(:first-of-type) {\n\t\tmargin-top: 10px;\n\t}\n"], ["\n\tcolor: ", ";\n\tfont-size: 14px;\n\tfont-style: italic;\n\tfont-weight: 400;\n\n\t&:not(:first-of-type) {\n\t\tmargin-top: 10px;\n\t}\n"])), function (props) { return props.theme.subtitleColor; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
