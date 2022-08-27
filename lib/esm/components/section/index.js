import React, { useState } from 'react';
import { useConfig } from '../../hooks/useConfig';
import { BodyWrapper, Title, BodyInner } from '../../styles/main';
var Section = function (_a) {
    var title = _a.title, children = _a.children;
    var config = useConfig().config;
    var _b = useState(true), show = _b[0], setShow = _b[1];
    var handleSetShow = function () {
        setShow(!show);
    };
    return (React.createElement(BodyWrapper, null,
        React.createElement(Title, { onClick: handleSetShow, collapse: config.collapse }, title),
        show && React.createElement(BodyInner, null, children)));
};
export default Section;
