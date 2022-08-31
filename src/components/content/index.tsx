import React, { useState } from 'react';
import { useConfig } from '../../hooks/useConfig';
import {
	ContentWrapper,
	Description,
	DescriptionWrapper,
	EventTitle,
	Icon,
} from '../../styles/main';

interface ContentProps {
	title: string;
	description: string[];
	collapse?: boolean;
}

const Content = ({ title, description, collapse }: ContentProps) => {
	const { config } = useConfig();
	const [show, setShow] = useState(true);
	const isCollapsed = collapse || config.collapse;

	const handleSetShow = () => {
		setShow(!show);
	};

	return (
		<ContentWrapper>
			<EventTitle
				collapse={isCollapsed}
				onClick={() => {
					if (isCollapsed) handleSetShow();
				}}
				style={config.customStyles?.event}
			>
				{isCollapsed && <Icon isShowing={show}>&#8250;</Icon>}
				{title}
			</EventTitle>

			{show && (
				<DescriptionWrapper>
					{description.map((text, i) => (
						<Description key={i} style={config.customStyles?.description}>
							{text}
						</Description>
					))}
				</DescriptionWrapper>
			)}
		</ContentWrapper>
	);
};

export { Content };
