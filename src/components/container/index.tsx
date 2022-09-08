import React from 'react';
import { useConfig } from '../../hooks/useConfig';
import { ContainerProps } from '../../interfaces';
import { ContainerWrapper, BodyWrapper, Title, BodyInner } from '../../styles/main';
import { Content } from '../content';
import { Validate } from '../validate';
import YearContent from '../year-content';

const Container = ({ title, startDate, endDate, today, withoutDay, children }: ContainerProps) => {
	const { config } = useConfig();

	return (
		<ContainerWrapper>
			<YearContent startDate={startDate} endDate={endDate} today={today} withoutDay={withoutDay} />

			<BodyWrapper>
				<Title style={config.customStyles?.title}>{title}</Title>
				<BodyInner>
					<Validate componentToValidate={Content}>{children}</Validate>
				</BodyInner>
			</BodyWrapper>
		</ContainerWrapper>
	);
};

export { Container };
