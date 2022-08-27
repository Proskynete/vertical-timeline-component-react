import React, { PropsWithChildren, useState } from 'react';
import { useConfig } from '../../hooks/useConfig';
import { BodyWrapper, Title, BodyInner } from '../../styles/main';

interface SectionProps {
	title: string;
}

const Section = ({ title, children }: PropsWithChildren<SectionProps>) => {
	const { config } = useConfig();
	const [show, setShow] = useState(true);

	const handleSetShow = () => {
		setShow(!show);
	};

	return (
		<BodyWrapper>
			<Title onClick={handleSetShow} collapse={config.collapse}>
				{title}
			</Title>
			{show && <BodyInner>{children}</BodyInner>}
		</BodyWrapper>
	);
};

export default Section;
