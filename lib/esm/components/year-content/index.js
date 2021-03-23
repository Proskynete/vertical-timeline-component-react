import React, { useContext } from 'react';
import { ConfigContext } from '../../context/config.context';
import { mapDate } from '../../helpers/transform-date.helper';
import { mapText } from '../../config';
import { YearWrapper, YearSpan } from '../../styles/main';
var YearContent = function (_a) {
    var startDate = _a.startDate, _b = _a.endDate, endDate = _b === void 0 ? '' : _b, _c = _a.currentYear, currentYear = _c === void 0 ? false : _c;
    var _d = useContext(ConfigContext), lang = _d.lang, dateFormat = _d.dateFormat;
    var d = new Date();
    var _year = d.getFullYear();
    var _currentYear = currentYear ? (React.createElement(React.Fragment, null,
        React.createElement("time", { dateTime: _year.toString() }, _year))) : null;
    var _endDate = endDate !== '' ? (React.createElement(React.Fragment, null,
        React.createElement(YearSpan, null, mapText[lang].to),
        React.createElement("time", { dateTime: endDate }, mapDate[lang][dateFormat](endDate)))) : null;
    var _startDate = (React.createElement(React.Fragment, null,
        React.createElement(YearSpan, null, mapText[lang].from),
        React.createElement("time", { dateTime: startDate }, mapDate[lang][dateFormat](startDate))));
    return (React.createElement(YearWrapper, { format: dateFormat, lang: lang },
        _currentYear,
        _endDate,
        _startDate));
};
export default YearContent;
