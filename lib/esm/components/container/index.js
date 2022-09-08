import React from 'react';
import { useConfig } from '../../hooks/useConfig';
import { ContainerWrapper, BodyWrapper, Title, BodyInner } from '../../styles/main';
import { Content } from '../content';
import { Validate } from '../validate';
import YearContent from '../year-content';
var Container = function (_a) {
    var _b;
    var title = _a.title, startDate = _a.startDate, endDate = _a.endDate, today = _a.today, withoutDay = _a.withoutDay, children = _a.children;
    var config = useConfig().config;
    return (React.createElement(ContainerWrapper, null,
        React.createElement(YearContent, { startDate: startDate, endDate: endDate, today: today, withoutDay: withoutDay }),
        React.createElement(BodyWrapper, null,
            React.createElement(Title, { style: (_b = config.customStyles) === null || _b === void 0 ? void 0 : _b.title }, title),
            React.createElement(BodyInner, null,
                React.createElement(Validate, { componentToValidate: Content }, children)))));
};
export { Container };
