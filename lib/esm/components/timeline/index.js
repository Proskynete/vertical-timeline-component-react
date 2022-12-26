import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultValues } from '../../config';
import { ConfigProvider } from '../../context/config.context';
import { TimelineWrapper, TimelineWrapperInner } from '../../styles/main';
import { Events } from '../events';
import { Validate } from '../validate';
var Timeline = function (_a) {
    var _b = _a.theme, theme = _b === void 0 ? defaultValues.theme : _b, _c = _a.lang, lang = _c === void 0 ? defaultValues.lang : _c, _d = _a.dateFormat, dateFormat = _d === void 0 ? defaultValues.dateFormat : _d, _e = _a.collapse, collapse = _e === void 0 ? defaultValues.collapse : _e, _f = _a.withoutDay, withoutDay = _f === void 0 ? defaultValues.withoutDay : _f, customStyles = _a.customStyles, children = _a.children;
    return (React.createElement(TimelineWrapper, null,
        React.createElement(TimelineWrapperInner, null,
            React.createElement(ConfigProvider, { config: { theme: theme, lang: lang, dateFormat: dateFormat, collapse: collapse, customStyles: customStyles, withoutDay: withoutDay } },
                React.createElement(ThemeProvider, { theme: theme },
                    React.createElement(Validate, { componentToValidate: Events }, children))))));
};
export { Timeline };
