import React from 'react';
import { useConfig } from '../../hooks/useConfig';
import { ContainerWrapper, BodyWrapper, Title, Subtitle, BodyInner } from '../../styles/main';
import { Event } from '../event';
import { Validate } from '../validate';
import YearContent from '../year-content';
var Events = function (_a) {
    var _b, _c;
    var active = _a.active, children = _a.children, _d = _a.defaultClosed, defaultClosed = _d === void 0 ? false : _d, endDate = _a.endDate, startDate = _a.startDate, subtitle = _a.subtitle, title = _a.title, withoutDay = _a.withoutDay;
    var config = useConfig().config;
    return (React.createElement(ContainerWrapper, null,
        React.createElement(YearContent, { startDate: startDate, endDate: endDate, active: active, withoutDay: withoutDay }),
        React.createElement(BodyWrapper, null,
            React.createElement(Title, { style: (_b = config.customStyles) === null || _b === void 0 ? void 0 : _b.title }, title),
            subtitle && React.createElement(Subtitle, { style: (_c = config.customStyles) === null || _c === void 0 ? void 0 : _c.subtitle }, subtitle),
            React.createElement(BodyInner, null,
                React.createElement(Validate, { componentToValidate: Event, defaultClosed: defaultClosed }, children)))));
};
export { Events };
