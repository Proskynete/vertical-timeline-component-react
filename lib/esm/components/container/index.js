import React, { Children } from 'react';
import { useConfig } from '../../hooks/useConfig';
import { ContainerWrapper, BodyWrapper, Title, BodyInner } from '../../styles/main';
import { Content } from '../content';
import YearContent from '../year-content';
var Container = function (_a) {
    var _b, _c;
    var title = _a.title, startDate = _a.startDate, endDate = _a.endDate, today = _a.today, withoutDay = _a.withoutDay, children = _a.children;
    var config = useConfig().config;
    var elements = (_b = Children.map(children, function (child) {
        return child.type === Content ? child : null;
    })) === null || _b === void 0 ? void 0 : _b.filter(Boolean);
    return (React.createElement(ContainerWrapper, null,
        React.createElement(YearContent, { startDate: startDate, endDate: endDate, today: today, withoutDay: withoutDay }),
        React.createElement(BodyWrapper, null,
            React.createElement(Title, { style: (_c = config.customStyles) === null || _c === void 0 ? void 0 : _c.title }, title),
            React.createElement(BodyInner, null, elements))));
};
export { Container };
