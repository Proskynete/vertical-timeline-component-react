import React from 'react';
import { node, oneOfType, arrayOf } from 'prop-types';
import { ContainerWrapper, BodyContent } from '../../styles/main';

const Container = (props) => {
	const { children } = props;

	return (
		<ContainerWrapper>
			{children[0]}
			<BodyContent>{children[1]}</BodyContent>
		</ContainerWrapper>
	);
};

Container.propTypes = {
	children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Container;
