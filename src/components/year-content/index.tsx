import React, { PropsWithChildren, useContext } from 'react';
import { ConfigContext } from '../../context/config.context';
import { mapDate } from '../../helpers/transform-date.helper';
import { mapText } from '../../config';
import { YearWrapper, YearSpan } from '../../styles/main';

interface YearContentProps {
	startDate: string;
	endDate?: string;
	currentYear?: boolean;
}

const YearContent = ({
	startDate,
	endDate,
	currentYear = false,
}: PropsWithChildren<YearContentProps>) => {
	const { lang, dateFormat } = useContext(ConfigContext);

	const d = new Date();
	const _year = d.getFullYear();

	const _currentYear = currentYear && (
		<>
			<time dateTime={_year.toString()}>{_year}</time>
		</>
	);

	const _endDate = endDate && (
		<>
			<YearSpan>{mapText[lang].to}</YearSpan>
			<time dateTime={endDate}>{mapDate[lang][dateFormat](endDate)}</time>
		</>
	);

	const _startDate = (
		<>
			<YearSpan>{mapText[lang].from}</YearSpan>
			<time dateTime={startDate}>{mapDate[lang][dateFormat](startDate)}</time>
		</>
	);

	return (
		<YearWrapper format={dateFormat} lang={lang}>
			{_currentYear}
			{_endDate}
			{_startDate}
		</YearWrapper>
	);
};

export default YearContent;
