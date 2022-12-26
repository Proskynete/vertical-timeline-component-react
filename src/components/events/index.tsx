import React, { PropsWithChildren } from 'react';
import { useConfig } from '../../hooks/useConfig';
import { ContainerProps } from '../../interfaces';
import { ContainerWrapper, BodyWrapper, Title, BodyInner } from '../../styles/main';
import { Event } from '../event';
import { Validate } from '../validate';
import YearContent from '../year-content';

const Events = ({
	title,
	startDate,
	endDate,
	today,
	withoutDay,
	children,
}: PropsWithChildren<ContainerProps>) => {
	const { config } = useConfig();

	return (
		<ContainerWrapper>
			<YearContent startDate={startDate} endDate={endDate} today={today} withoutDay={withoutDay} />

			<BodyWrapper>
				<Title style={config.customStyles?.title}>{title}</Title>
				<BodyInner>
					<Validate componentToValidate={Event}>{children}</Validate>
				</BodyInner>
			</BodyWrapper>
		</ContainerWrapper>
	);
};

export { Events };
