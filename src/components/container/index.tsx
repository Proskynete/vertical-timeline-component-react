import React, { Children, ReactElement } from 'react';
import { useConfig } from '../../hooks/useConfig';
import { ContainerProps } from '../../interfaces';
import { ContainerWrapper, BodyWrapper, Title, BodyInner } from '../../styles/main';
import { Content } from '../content';
import YearContent from '../year-content';

const Container = ({ title, startDate, endDate, today, withoutDay, children }: ContainerProps) => {
	const { config } = useConfig();

	const elements = Children.map(children, (child) =>
		(child as ReactElement).type === Content ? child : null,
	)?.filter(Boolean);

	return (
		<ContainerWrapper>
			<YearContent startDate={startDate} endDate={endDate} today={today} withoutDay={withoutDay} />

			<BodyWrapper>
				<Title style={config.customStyles?.title}>{title}</Title>
				<BodyInner>{elements}</BodyInner>
			</BodyWrapper>
		</ContainerWrapper>
	);
};

export { Container };
