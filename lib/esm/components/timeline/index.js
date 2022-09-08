import React, { Children } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultValues } from '../../config';
import { ConfigProvider } from '../../context/config.context';
import { TimelineWrapper, TimelineWrapperInner } from '../../styles/main';
import { Container } from '../container';
var Timeline = function (_a) {
    var _b;
    var _c = _a.theme, theme = _c === void 0 ? defaultValues.theme : _c, _d = _a.lang, lang = _d === void 0 ? defaultValues.lang : _d, _e = _a.dateFormat, dateFormat = _e === void 0 ? defaultValues.dateFormat : _e, _f = _a.collapse, collapse = _f === void 0 ? defaultValues.collapse : _f, _g = _a.withoutDay, withoutDay = _g === void 0 ? defaultValues.withoutDay : _g, customStyles = _a.customStyles, children = _a.children;
    var elements = (_b = Children.map(children, function (child) {
        return child.type === Container ? child : null;
    })) === null || _b === void 0 ? void 0 : _b.filter(Boolean);
    return (React.createElement(TimelineWrapper, null,
        React.createElement(TimelineWrapperInner, null,
            React.createElement(ConfigProvider, { config: { theme: theme, lang: lang, dateFormat: dateFormat, collapse: collapse, customStyles: customStyles, withoutDay: withoutDay } },
                React.createElement(ThemeProvider, { theme: theme }, elements)))));
};
export { Timeline };
