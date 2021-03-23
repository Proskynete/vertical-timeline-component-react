import React from 'react';
import { BodyWrapper, Title, BodyInner } from '../../styles/main';
import { SectionInterface } from '../../types';

const Section = ({ title, children }: SectionInterface) => (
	<BodyWrapper>
		<Title>{title}</Title>
		<BodyInner>{children}</BodyInner>
	</BodyWrapper>
);

export default Section;
