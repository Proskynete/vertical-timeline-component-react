import React, { PropsWithChildren } from 'react';
import { BodyWrapper, Title, BodyInner } from '../../styles/main';

interface SectionProps {
	title: string;
}

const Section = ({ title, children }: PropsWithChildren<SectionProps>) => {
	return (
		<BodyWrapper>
			<Title>{title}</Title>
			<BodyInner>{children}</BodyInner>
		</BodyWrapper>
	);
};

export default Section;
