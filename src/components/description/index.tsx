import React from 'react';
import {
	Subtitle,
	DescriptionText,
	DescriptionSubtitle,
} from '../../styles/main';

interface DescriptionProps {
	text: string;
	variant?: 'description' | 'subtitle' | 'descriptionSubtitle';
}

const Description = ({ text, variant = 'description' }: DescriptionProps) => {
	switch (variant) {
		case 'subtitle':
			return <Subtitle>{text}</Subtitle>;
		case 'descriptionSubtitle':
			return <DescriptionSubtitle>{text}</DescriptionSubtitle>;
		default:
			return <DescriptionText>{text}</DescriptionText>;
	}
};

export default Description;
