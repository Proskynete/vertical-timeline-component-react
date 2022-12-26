var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { ErrorMessage } from '../error-message';
var Validate = function (_a) {
    var children = _a.children, componentToValidate = _a.componentToValidate, otherProps = __rest(_a, ["children", "componentToValidate"]);
    var count = children && React.Children.count(children);
    if (count === 0 || !children)
        return React.createElement(ErrorMessage, { type: "atLeast", component: componentToValidate.name });
    var elements = React.Children.map(children, function (element) {
        return element.type === componentToValidate ? (React.cloneElement(element, otherProps)) : (React.createElement(ErrorMessage, { type: "onlySupports", component: componentToValidate.name }));
    });
    return React.createElement(React.Fragment, null, elements);
};
export { Validate };
