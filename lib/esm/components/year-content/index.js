import React from 'react';
import { mapText } from '../../config';
import { YearWrapper, YearSpan } from '../../styles/main';
import { getAccessibilityDate, transformDate } from '../../helpers/transform-date.helper';
import { getAriaText } from '../../helpers/text.helper';
import { useConfig } from '../../hooks/useConfig';
var YearContent = function (_a) {
    var startDate = _a.startDate, endDate = _a.endDate, _b = _a.today, today = _b === void 0 ? false : _b;
    var _c = useConfig().config, lang = _c.lang, dateFormat = _c.dateFormat, customStyles = _c.customStyles;
    var _today = today && (React.createElement("time", { "aria-hidden": true, dateTime: getAccessibilityDate({
            date: new Date(),
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
                date: endDate || new Date(),
                lang: lang,
                type: 'full',
            }),
            today: today,
            lang: lang,
        }), style: customStyles === null || customStyles === void 0 ? void 0 : customStyles.date },
        _today,
        _endDate,
        _startDate));
};
export default YearContent;
