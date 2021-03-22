import React from 'react';
import { node, oneOfType, arrayOf } from 'prop-types';

const BodyContent = (props) => {
	const { children } = props;

	return <>{children}</>;
};

BodyContent.propTypes = {
	children: oneOfType([arrayOf(node), node]).isRequired,
};

export default BodyContent;
