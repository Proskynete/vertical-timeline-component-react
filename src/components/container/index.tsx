import React, { PropsWithChildren, useState } from 'react';
import { transformDate } from '../../helpers/transform-date.helper';
import { useConfig } from '../../hooks/useConfig';
import {
	ContainerWrapper,
	BodyContent,
	BodyWrapper,
	Title,
	BodyInner,
	YearWrapper,
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
	const [show, setShow] = useState(true);

	const handleSetShow = () => {
		setShow(!show);
	};

	return (
		<ContainerWrapper>
			{show ? (
				<YearContent
					startDate={startDate}
					endDate={endDate}
					currentYear={currentYear}
				/>
			) : (
				<YearWrapper format={config.dateFormat} lang={config.lang} />
			)}
			<BodyContent>
				<BodyWrapper>
					<div
						style={{
							display: 'flex',
						}}
					>
						<Title onClick={handleSetShow} collapse={config.collapse}>
							{title}
						</Title>

						{!show && (
							<p
								style={{
									margin: '0 0 0 8px',
									fontSize: '12px',
									alignSelf: 'self-end',
								}}
							>
								(
								{transformDate({
									date: startDate,
									lang: config.lang,
									type: config.dateFormat,
								})}{' '}
								-{' '}
								{endDate
									? transformDate({
											date: endDate as string,
											lang: config.lang,
											type: config.dateFormat,
									  })
									: transformDate({
											date: new Date().toISOString(),
											lang: config.lang,
											type: config.dateFormat,
									  })}
								)
							</p>
						)}
					</div>

					{show && <BodyInner>{children}</BodyInner>}
				</BodyWrapper>
			</BodyContent>
		</ContainerWrapper>
	);
};

export default Container;
