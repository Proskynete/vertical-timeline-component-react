import React from 'react';
import { Subtitle, DescriptionText } from '../../styles/main';
import { DescriptionInterface } from '../../types';

const Description = ({ text, variant = 'description' }: DescriptionInterface) =>
	variant === 'subtitle' ? (
		<Subtitle>{text}</Subtitle>
	) : (
		<DescriptionText>{text}</DescriptionText>
	);

export default Description;
