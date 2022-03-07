import React from 'react';
import { ContainerWrapper, BodyContent } from '../../styles/main';
var Container = function (_a) {
    var children = _a.children;
    return children ? (React.createElement(ContainerWrapper, null,
        children[0],
        React.createElement(BodyContent, null, children[1]))) : (React.createElement(React.Fragment, null));
};
export default Container;
