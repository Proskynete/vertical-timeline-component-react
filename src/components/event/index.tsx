import React, { useState } from 'react';
import { useConfig } from '../../hooks/useConfig';
import { EventProps } from '../../interfaces';
import { Description, DescriptionWrapper, EventTitle, Icon } from '../../styles/main';

const Event = ({ defaultClosed, description, title }: EventProps) => {
	const { config } = useConfig();
	const [show, setShow] = useState(!title ? true : !defaultClosed);
	const isCollapsed = config.collapse;

	const handleSetShow = () => {
		setShow(!show);
	};

	return (
		<>
			{!!title && (
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
			)}

			{show && (
				<DescriptionWrapper>
					{description.map((text, i) => (
						<Description
							key={i}
							symbol={config.descriptionSymbol}
							style={config.customStyles?.description}
						>
							{text}
						</Description>
					))}
				</DescriptionWrapper>
			)}
		</>
	);
};

export { Event };
