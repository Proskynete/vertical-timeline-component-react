import React from 'react';
import { string, oneOf } from 'prop-types';
import { Subtitle, DescriptionText } from '../../styles/main';

const Description = (props) => {
	const { variant, text } = props;

	return variant === 'subtitle' ? (
		<Subtitle>{text}</Subtitle>
	) : (
		<DescriptionText>{text}</DescriptionText>
	);
};

Description.defaultProps = {
	variant: 'description',
};

Description.propTypes = {
	text: string.isRequired,
	variant: oneOf(['subtitle', 'description']),
};

export default Description;
