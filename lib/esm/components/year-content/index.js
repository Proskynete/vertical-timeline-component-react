import React, { useContext } from 'react';
import { ConfigContext } from '../../context/config.context';
import { mapText } from '../../config';
import { YearWrapper, YearSpan } from '../../styles/main';
import { transformDate } from '../../helpers/transform-date.helper';
import { clearString } from '../../helpers/text.helper';
var YearContent = function (_a) {
    var startDate = _a.startDate, endDate = _a.endDate, _b = _a.currentYear, currentYear = _b === void 0 ? false : _b;
    var _c = useContext(ConfigContext), lang = _c.lang, dateFormat = _c.dateFormat;
    var _lang = clearString(lang).split(' ')[0];
    console.log('_lang: ', _lang);
    var d = new Date();
    var _year = d.getFullYear();
    var _currentYear = currentYear && (React.createElement("time", { dateTime: _year.toString() }, _year));
    var _endDate = endDate && (React.createElement(React.Fragment, null,
        React.createElement(YearSpan, null, mapText[_lang].to),
        React.createElement("time", { dateTime: endDate }, transformDate({ date: endDate, lang: _lang, type: dateFormat }))));
    var _startDate = (React.createElement(React.Fragment, null,
        React.createElement(YearSpan, null, mapText[_lang].from),
        React.createElement("time", { dateTime: startDate }, transformDate({ date: startDate, lang: _lang, type: dateFormat }))));
    return (React.createElement(YearWrapper, { format: dateFormat, lang: lang },
        _currentYear,
        _endDate,
        _startDate));
};
export default YearContent;
