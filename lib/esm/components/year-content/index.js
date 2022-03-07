import React, { useContext } from 'react';
import { ConfigContext } from '../../context/config.context';
import { mapDate } from '../../helpers/transform-date.helper';
import { mapText } from '../../config';
import { YearWrapper, YearSpan } from '../../styles/main';
var YearContent = function (_a) {
    var startDate = _a.startDate, endDate = _a.endDate, _b = _a.currentYear, currentYear = _b === void 0 ? false : _b;
    var _c = useContext(ConfigContext), lang = _c.lang, dateFormat = _c.dateFormat;
    var d = new Date();
    var _year = d.getFullYear();
    var _currentYear = currentYear && (React.createElement(React.Fragment, null,
        React.createElement("time", { dateTime: _year.toString() }, _year)));
    var _endDate = endDate && (React.createElement(React.Fragment, null,
        React.createElement(YearSpan, null, mapText[lang].to),
        React.createElement("time", { dateTime: endDate }, mapDate[lang][dateFormat](endDate))));
    var _startDate = (React.createElement(React.Fragment, null,
        React.createElement(YearSpan, null, mapText[lang].from),
        React.createElement("time", { dateTime: startDate }, mapDate[lang][dateFormat](startDate))));
    return (React.createElement(YearWrapper, { format: dateFormat, lang: lang },
        _currentYear,
        _endDate,
        _startDate));
};
export default YearContent;
