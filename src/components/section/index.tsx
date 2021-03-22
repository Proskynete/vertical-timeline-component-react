import React from 'react';
import { string, node, oneOfType, arrayOf } from 'prop-types';
import { BodyWrapper, Title, BodyInner } from '../../styles/main';

const Section = (props) => {
	const { title, children } = props;

	return (
		<BodyWrapper>
			<Title>{title}</Title>
			<BodyInner>{children}</BodyInner>
		</BodyWrapper>
	);
};

Section.propTypes = {
	title: string.isRequired,
	children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Section;
