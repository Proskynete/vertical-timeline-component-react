import React, { PropsWithChildren } from 'react';
import { useConfig } from '../../hooks/useConfig';
import {
	ContainerWrapper,
	BodyContent,
	BodyWrapper,
	Title,
	BodyInner,
} from '../../styles/main';
import YearContent from '../year-content';

interface ContainerProps {
	title: string;
	startDate: string;
	endDate?: string;
	currentYear?: boolean;
}

const Container = ({
	title,
	startDate,
	endDate,
	currentYear,
	children,
}: PropsWithChildren<ContainerProps>) => {
	const { config } = useConfig();

	return (
		<ContainerWrapper>
			<YearContent
				startDate={startDate}
				endDate={endDate}
				currentYear={currentYear}
			/>

			<BodyContent>
				<BodyWrapper>
					<Title style={config.customStyles?.title}>{title}</Title>
					<BodyInner>{children}</BodyInner>
				</BodyWrapper>
			</BodyContent>
		</ContainerWrapper>
	);
};

export { Container };
