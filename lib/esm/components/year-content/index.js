import React from 'react';
import { mapText } from '../../config';
import { YearWrapper, YearSpan } from '../../styles/main';
import { getAccessibilityDate, transformDate, } from '../../helpers/transform-date.helper';
import { getAriaText } from '../../helpers/text.helper';
import { useConfig } from '../../hooks/useConfig';
var YearContent = function (_a) {
    var startDate = _a.startDate, endDate = _a.endDate, _b = _a.currentYear, currentYear = _b === void 0 ? false : _b;
    var _c = useConfig().config, lang = _c.lang, dateFormat = _c.dateFormat;
    var _currentYear = currentYear && (React.createElement("time", { "aria-hidden": true, dateTime: getAccessibilityDate({
            date: new Date().toISOString(),
            lang: lang,
        }) }, new Date().getFullYear()));
    var _endDate = endDate && (React.createElement(React.Fragment, null,
        React.createElement(YearSpan, { "aria-hidden": true }, mapText[lang].to),
        React.createElement("time", { "aria-hidden": true, dateTime: getAccessibilityDate({ date: endDate, lang: lang }) }, transformDate({ date: endDate, lang: lang, type: dateFormat }))));
    var _startDate = (React.createElement(React.Fragment, null,
        React.createElement(YearSpan, { "aria-hidden": true }, mapText[lang].from),
        React.createElement("time", { "aria-hidden": true, dateTime: getAccessibilityDate({ date: startDate, lang: lang }) }, transformDate({ date: startDate, lang: lang, type: dateFormat }))));
    return (React.createElement(YearWrapper, { format: dateFormat, lang: lang, "aria-label": getAriaText({
            from: transformDate({ date: startDate, lang: lang, type: 'full' }),
            to: transformDate({
                date: endDate || new Date().toISOString(),
                lang: lang,
                type: 'full',
            }),
            currentYear: currentYear,
            lang: lang,
        }) },
        _currentYear,
        _endDate,
        _startDate));
};
export default YearContent;
