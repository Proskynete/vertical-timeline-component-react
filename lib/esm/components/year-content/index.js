import React from 'react';
import { mapText } from '../../config';
import { YearWrapper, YearSpan } from '../../styles/main';
import { getAccessibilityDate, transformDate } from '../../helpers/transform-date.helper';
import { getAriaText } from '../../helpers/text.helper';
import { useConfig } from '../../hooks/useConfig';
var YearContent = function (_a) {
    var _b;
    var startDate = _a.startDate, endDate = _a.endDate, _c = _a.today, today = _c === void 0 ? false : _c, withoutDay = _a.withoutDay;
    var config = useConfig().config;
    var _today = today && (React.createElement("time", { "aria-hidden": true, dateTime: getAccessibilityDate({
            date: new Date(),
            lang: config.lang,
            withoutDay: config.withoutDay || withoutDay,
        }) }, new Date().getFullYear()));
    var _endDate = endDate && (React.createElement(React.Fragment, null,
        React.createElement(YearSpan, { "aria-hidden": true }, mapText[config.lang].to),
        React.createElement("time", { "aria-hidden": true, dateTime: getAccessibilityDate({
                date: endDate,
                lang: config.lang,
                withoutDay: config.withoutDay || withoutDay,
            }) }, transformDate({
            date: endDate,
            lang: config.lang,
            type: config.dateFormat,
            withoutDay: config.withoutDay || withoutDay,
        }))));
    var _startDate = (React.createElement(React.Fragment, null,
        React.createElement(YearSpan, { "aria-hidden": true }, mapText[config.lang].from),
        React.createElement("time", { "aria-hidden": true, dateTime: getAccessibilityDate({
                date: startDate,
                lang: config.lang,
                withoutDay: config.withoutDay || withoutDay,
            }) }, transformDate({
            date: startDate,
            lang: config.lang,
            type: config.dateFormat,
            withoutDay: config.withoutDay || withoutDay,
        }))));
    return (React.createElement(YearWrapper, { format: config.dateFormat, lang: config.lang, "aria-label": getAriaText({
            from: transformDate({
                date: startDate,
                lang: config.lang,
                type: 'full',
                withoutDay: config.withoutDay || withoutDay,
            }),
            to: transformDate({
                date: endDate || new Date(),
                lang: config.lang,
                type: 'full',
                withoutDay: config.withoutDay || withoutDay,
            }),
            today: today,
            lang: config.lang,
        }), style: (_b = config.customStyles) === null || _b === void 0 ? void 0 : _b.date },
        _today,
        _endDate,
        _startDate));
};
export default YearContent;
