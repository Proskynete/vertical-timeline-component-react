import React from 'react';
import { Subtitle, DescriptionText } from '../../styles/main';

interface DescriptionProps {
	text: string;
	variant?: 'description' | 'subtitle';
}

const Description = ({ text, variant = 'description' }: DescriptionProps) => {
	switch (variant) {
		case 'subtitle':
			return <Subtitle>{text}</Subtitle>;
		default:
			return <DescriptionText>{text}</DescriptionText>;
	}
};

export default Description;
