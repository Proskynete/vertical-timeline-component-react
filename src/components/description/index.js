import React from 'react';
import { string, oneOf } from 'prop-types';
import {
	Subtitle,
	DescriptionText,
	DescriptionSubtitle,
} from '../../styles/main';

const Description = (props) => {
	const { variant, text } = props;

	switch (variant) {
		case 'subtitle':
			return <Subtitle>{text}</Subtitle>;
		case 'descriptionSubtitle':
			return <DescriptionSubtitle>{text}</DescriptionSubtitle>;
		default:
			return <DescriptionText>{text}</DescriptionText>;
	}
};

Description.defaultProps = {
	variant: 'description',
};

Description.propTypes = {
	text: string.isRequired,
	variant: oneOf(['subtitle', 'description', 'descriptionSubtitle']),
};

export default Description;
