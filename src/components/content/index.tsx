import React, { useState } from 'react';
import { useConfig } from '../../hooks/useConfig';
import { Subtitle, DescriptionText, ContentWrapper } from '../../styles/main';

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
			<Subtitle
				collapse={collapse || config.collapse}
				onClick={() => {
					if (collapse || config.collapse) handleSetShow();
				}}
			>
				{(collapse || config.collapse) && (
					<i
						style={{
							marginRight: '3px',
							fontStyle: 'normal',
							transform: show ? 'rotate(90deg)' : 'rotate(0deg)',
							transition: 'transform .2s ease-in-out',
						}}
					>
						&#8250;
					</i>
				)}
				{title}
			</Subtitle>

			{show && (
				<div style={{ paddingLeft: '10px' }}>
					{description.map((text, index) => (
						<DescriptionText key={index}>{text}</DescriptionText>
					))}
				</div>
			)}
		</ContentWrapper>
	);
};

export { Content };
