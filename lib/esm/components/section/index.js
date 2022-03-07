import React from 'react';
import { BodyWrapper, Title, BodyInner } from '../../styles/main';
var Section = function (_a) {
    var title = _a.title, children = _a.children;
    return (React.createElement(BodyWrapper, null,
        React.createElement(Title, null, title),
        React.createElement(BodyInner, null, children)));
};
export default Section;
