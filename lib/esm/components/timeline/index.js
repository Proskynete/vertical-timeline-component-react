import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultValues } from '../../config';
import { ConfigProvider } from '../../context/config.context';
import { TimelineWrapper, TimelineWrapperInner } from '../../styles/main';
var Timeline = function (_a) {
    var _b = _a.theme, theme = _b === void 0 ? defaultValues.theme : _b, _c = _a.lang, lang = _c === void 0 ? defaultValues.lang : _c, _d = _a.dateFormat, dateFormat = _d === void 0 ? defaultValues.dateFormat : _d, _e = _a.collapse, collapse = _e === void 0 ? defaultValues.collapse : _e, children = _a.children;
    return (React.createElement(TimelineWrapper, null,
        React.createElement(TimelineWrapperInner, null,
            React.createElement(ConfigProvider, { config: { theme: theme, lang: lang, dateFormat: dateFormat, collapse: collapse } },
                React.createElement(ThemeProvider, { theme: theme }, children)))));
};
export { Timeline };
