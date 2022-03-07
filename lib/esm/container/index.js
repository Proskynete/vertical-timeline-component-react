import React from 'react';
import { node, oneOfType, arrayOf } from 'prop-types';
import { ContainerWrapper, BodyContent } from '../../styles/main';
var Container = function (props) {
    var children = props.children;
    return (React.createElement(ContainerWrapper, null,
        children[0],
        React.createElement(BodyContent, null, children[1])));
};
Container.propTypes = {
    children: oneOfType([arrayOf(node), node]).isRequired,
};
export default Container;
