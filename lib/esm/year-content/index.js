import React, { useContext } from 'react';
import { string, bool } from 'prop-types';
import { ConfigContext } from '../../context/config.context';
import { mapDate } from '../../helpers/transform-date.helper';
import { mapText } from '../../config';
import { YearWrapper, YearSpan } from '../../styles/main';
var YearContent = function (props) {
    var startDate = props.startDate, endDate = props.endDate, currentYear = props.currentYear;
    var _a = useContext(ConfigContext), lang = _a.lang, dateFormat = _a.dateFormat;
    var d = new Date();
    var _year = d.getFullYear();
    var _currentYear = currentYear ? (React.createElement(React.Fragment, null,
        React.createElement("time", { dateTime: _year }, _year))) : null;
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
YearContent.defaultProps = {
    endDate: '',
    currentYear: false,
};
YearContent.propTypes = {
    startDate: string.isRequired,
    endDate: string,
    currentYear: bool,
};
export default YearContent;
