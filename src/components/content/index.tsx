import React, { useState } from 'react';
import { useConfig } from '../../hooks/useConfig';
import { Subtitle, DescriptionText } from '../../styles/main';

interface ContentProps {
	title: string;
	description: string[];
	collapse?: boolean;
}

const Content = ({ title, description, collapse }: ContentProps) => {
	const { config } = useConfig();
	const [show, setShow] = useState(true);

	const handleSetShow = () => {
		setShow(!show);
	};

	return (
		<>
			<Subtitle
				collapse={config.collapse}
				onClick={() => {
					if (collapse || config.collapse) handleSetShow();
				}}
			>
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
