import React, { useState } from 'react';
import { transformDate } from '../../helpers/transform-date.helper';
import { useConfig } from '../../hooks/useConfig';
import { ContainerWrapper, BodyContent, BodyWrapper, Title, BodyInner, YearWrapper, } from '../../styles/main';
import YearContent from '../year-content';
var Container = function (_a) {
    var title = _a.title, startDate = _a.startDate, endDate = _a.endDate, currentYear = _a.currentYear, children = _a.children;
    var config = useConfig().config;
    var _b = useState(true), show = _b[0], setShow = _b[1];
    var handleSetShow = function () {
        setShow(!show);
    };
    return (React.createElement(ContainerWrapper, null,
        show ? (React.createElement(YearContent, { startDate: startDate, endDate: endDate, currentYear: currentYear })) : (React.createElement(YearWrapper, { format: config.dateFormat, lang: config.lang })),
        React.createElement(BodyContent, null,
            React.createElement(BodyWrapper, null,
                React.createElement("div", { style: {
                        display: 'flex',
                    } },
                    React.createElement(Title, { onClick: handleSetShow, collapse: config.collapse }, title),
                    !show && (React.createElement("p", { style: {
                            margin: '0 0 0 8px',
                            fontSize: '12px',
                            alignSelf: 'self-end',
                        } },
                        "(",
                        transformDate({
                            date: startDate,
                            lang: config.lang,
                            type: config.dateFormat,
                        }),
                        ' ',
                        "-",
                        ' ',
                        endDate
                            ? transformDate({
                                date: endDate,
                                lang: config.lang,
                                type: config.dateFormat,
                            })
                            : transformDate({
                                date: new Date().toISOString(),
                                lang: config.lang,
                                type: config.dateFormat,
                            }),
                        ")"))),
                show && React.createElement(BodyInner, null, children)))));
};
export default Container;
