import React, { PropsWithChildren } from 'react';
import { useConfig } from '../../hooks/useConfig';
import { EventsProps } from '../../interfaces';
import { ContainerWrapper, BodyWrapper, Title, Subtitle, BodyInner } from '../../styles/main';
import { Event } from '../event';
import { Validate } from '../validate';
import YearContent from '../year-content';

const Events = ({
	title,
	subtitle,
	startDate,
	endDate,
	active,
	withoutDay,
	defaultClosed = false,
	children,
}: PropsWithChildren<EventsProps>) => {
	const { config } = useConfig();

	return (
		<ContainerWrapper>
			<YearContent
				startDate={startDate}
				endDate={endDate}
				active={active}
				withoutDay={withoutDay}
			/>

			<BodyWrapper>
				<Title style={config.customStyles?.title}>{title}</Title>
				{subtitle && <Subtitle style={config.customStyles?.subtitle}>{subtitle}</Subtitle>}

				<BodyInner>
					<Validate componentToValidate={Event} defaultClosed={defaultClosed}>
						{children}
					</Validate>
				</BodyInner>
			</BodyWrapper>
		</ContainerWrapper>
	);
};

export { Events };
