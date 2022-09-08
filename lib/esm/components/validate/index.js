import React, { Children } from 'react';
import { ErrorMessage } from '../error-message';
var Validate = function (_a) {
    var children = _a.children, componentToValidate = _a.componentToValidate;
    var count = Children.count(children);
    if (count === 0)
        return React.createElement(ErrorMessage, { type: "atLeast", component: componentToValidate.name });
    if (count === 1 && children.type !== componentToValidate)
        return React.createElement(ErrorMessage, { type: "onlySupports", component: componentToValidate.name });
    var elements = Children.map(children, function (element) {
        return element.type === componentToValidate ? element : null;
    });
    return React.createElement(React.Fragment, null, elements);
};
export { Validate };
