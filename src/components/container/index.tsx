import React, { PropsWithChildren } from 'react';
import { useConfig } from '../../hooks/useConfig';
import { ContainerWrapper, BodyWrapper, Title, BodyInner } from '../../styles/main';
import YearContent from '../year-content';

interface ContainerProps {
	title: string;
	startDate: string | Date;
	endDate?: string | Date;
	today?: boolean;
	withoutDay?: boolean;
}

const Container = ({
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
				<BodyInner>{children}</BodyInner>
			</BodyWrapper>
		</ContainerWrapper>
	);
};

export { Container };
