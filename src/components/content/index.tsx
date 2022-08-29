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

	const handleSetShow = () => {
		setShow(!show);
	};

	return (
		<ContentWrapper>
			<EventTitle
				collapse={collapse || config.collapse}
				onClick={() => {
					if (collapse || config.collapse) handleSetShow();
				}}
			>
				{(collapse || config.collapse) && <Icon isShowing={show}>&#8250;</Icon>}
				{title}
			</EventTitle>

			{show && (
				<DescriptionWrapper>
					{description.map((text, index) => (
						<Description key={index}>{text}</Description>
					))}
				</DescriptionWrapper>
			)}
		</ContentWrapper>
	);
};

export { Content };
