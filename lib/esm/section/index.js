import React from 'react';
import { string, node, oneOfType, arrayOf } from 'prop-types';
import { BodyWrapper, Title, BodyInner } from '../../styles/main';
var Section = function (props) {
    var title = props.title, children = props.children;
    return (React.createElement(BodyWrapper, null,
        React.createElement(Title, null, title),
        React.createElement(BodyInner, null, children)));
};
Section.propTypes = {
    title: string.isRequired,
    children: oneOfType([arrayOf(node), node]).isRequired,
};
export default Section;
