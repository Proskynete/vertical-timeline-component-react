import React from 'react';
import { TextErrorMessage } from '../../styles/main';
var ErrorMessage = function (_a) {
    var type = _a.type, component = _a.component;
    return (React.createElement(React.Fragment, null, type === 'atLeast' ? (React.createElement(TextErrorMessage, null,
        "You need at least one ",
        React.createElement("code", null, "<".concat(component, " />")),
        " to correctly render this component")) : (React.createElement(TextErrorMessage, null,
        "This component only supports ",
        React.createElement("code", null, "<".concat(component, " />")),
        " components as children"))));
};
export { ErrorMessage };
