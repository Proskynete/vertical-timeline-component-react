import React from 'react';
import { useConfig } from '../../hooks/useConfig';
import { ContainerWrapper, BodyContent, BodyWrapper, Title, BodyInner, } from '../../styles/main';
import YearContent from '../year-content';
var Container = function (_a) {
    var _b;
    var title = _a.title, startDate = _a.startDate, endDate = _a.endDate, currentYear = _a.currentYear, children = _a.children;
    var config = useConfig().config;
    return (React.createElement(ContainerWrapper, null,
        React.createElement(YearContent, { startDate: startDate, endDate: endDate, currentYear: currentYear }),
        React.createElement(BodyContent, null,
            React.createElement(BodyWrapper, null,
                React.createElement(Title, { style: (_b = config.customStyles) === null || _b === void 0 ? void 0 : _b.title }, title),
                React.createElement(BodyInner, null, children)))));
};
export { Container };
