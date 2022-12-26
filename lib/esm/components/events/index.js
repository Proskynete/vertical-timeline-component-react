import React from 'react';
import { useConfig } from '../../hooks/useConfig';
import { ContainerWrapper, BodyWrapper, Title, BodyInner } from '../../styles/main';
import { Event } from '../event';
import { Validate } from '../validate';
import YearContent from '../year-content';
var Events = function (_a) {
    var _b;
    var title = _a.title, startDate = _a.startDate, endDate = _a.endDate, active = _a.active, withoutDay = _a.withoutDay, children = _a.children;
    var config = useConfig().config;
    return (React.createElement(ContainerWrapper, null,
        React.createElement(YearContent, { startDate: startDate, endDate: endDate, active: active, withoutDay: withoutDay }),
        React.createElement(BodyWrapper, null,
            React.createElement(Title, { style: (_b = config.customStyles) === null || _b === void 0 ? void 0 : _b.title }, title),
            React.createElement(BodyInner, null,
                React.createElement(Validate, { componentToValidate: Event }, children)))));
};
export { Events };
