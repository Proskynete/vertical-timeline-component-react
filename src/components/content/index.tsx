import React, { useState } from 'react';
import { useConfig } from '../../hooks/useConfig';
import { Subtitle, DescriptionText } from '../../styles/main';

interface ContentProps {
	title: string;
	description: string[];
}

const Content = ({ title, description }: ContentProps) => {
	const { config } = useConfig();
	const [show, setShow] = useState(true);

	const handleSetShow = () => {
		setShow(!show);
	};

	return (
		<>
			<Subtitle onClick={handleSetShow} collapse={config.collapse}>
				{title}
			</Subtitle>

			{show &&
				description.map((text, index) => (
					<DescriptionText key={index}>{text}</DescriptionText>
				))}
		</>
	);
};

export default Content;
