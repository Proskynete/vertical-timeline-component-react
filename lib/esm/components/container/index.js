import React from 'react';
import { ContainerWrapper, BodyContent, BodyWrapper, Title, BodyInner, } from '../../styles/main';
import YearContent from '../year-content';
var Container = function (_a) {
    var title = _a.title, startDate = _a.startDate, endDate = _a.endDate, currentYear = _a.currentYear, children = _a.children;
    return (React.createElement(ContainerWrapper, null,
        React.createElement(YearContent, { startDate: startDate, endDate: endDate, currentYear: currentYear }),
        React.createElement(BodyContent, null,
            React.createElement(BodyWrapper, null,
                React.createElement(Title, null, title),
                React.createElement(BodyInner, null, children)))));
};
export { Container };
