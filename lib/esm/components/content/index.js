import React, { useState } from 'react';
import { useConfig } from '../../hooks/useConfig';
import { Subtitle, DescriptionText } from '../../styles/main';
var Content = function (_a) {
    var title = _a.title, description = _a.description;
    var config = useConfig().config;
    var _b = useState(true), show = _b[0], setShow = _b[1];
    var handleSetShow = function () {
        setShow(!show);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Subtitle, { onClick: handleSetShow, collapse: config.collapse }, title),
        show &&
            description.map(function (text, index) { return (React.createElement(DescriptionText, { key: index }, text)); })));
};
export default Content;
