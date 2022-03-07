import React from 'react';
import { node, oneOfType, arrayOf } from 'prop-types';
var BodyContent = function (props) {
    var children = props.children;
    return React.createElement(React.Fragment, null, children);
};
BodyContent.propTypes = {
    children: oneOfType([arrayOf(node), node]).isRequired,
};
export default BodyContent;
