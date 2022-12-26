import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultValues } from '../../config';
import { ConfigProvider } from '../../context/config.context';
import { TimelineWrapper, TimelineWrapperInner } from '../../styles/main';
import { Events } from '../events';
import { Validate } from '../validate';
var Timeline = function (_a) {
    var children = _a.children, _b = _a.collapse, collapse = _b === void 0 ? defaultValues.collapse : _b, customStyles = _a.customStyles, _c = _a.dateFormat, dateFormat = _c === void 0 ? defaultValues.dateFormat : _c, _d = _a.descriptionSymbol, descriptionSymbol = _d === void 0 ? defaultValues.descriptionSymbol : _d, _e = _a.lang, lang = _e === void 0 ? defaultValues.lang : _e, _f = _a.theme, theme = _f === void 0 ? defaultValues.theme : _f, _g = _a.withoutDay, withoutDay = _g === void 0 ? defaultValues.withoutDay : _g;
    return (React.createElement(TimelineWrapper, null,
        React.createElement(TimelineWrapperInner, null,
            React.createElement(ConfigProvider, { config: {
                    theme: theme,
                    lang: lang,
                    dateFormat: dateFormat,
                    collapse: collapse,
                    customStyles: customStyles,
                    descriptionSymbol: descriptionSymbol,
                    withoutDay: withoutDay,
                } },
                React.createElement(ThemeProvider, { theme: theme },
                    React.createElement(Validate, { componentToValidate: Events }, children))))));
};
export { Timeline };
