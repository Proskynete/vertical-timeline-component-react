import React, { useContext } from 'react';
import { ConfigContext } from '../../context/config.context';
import { mapDate } from '../../helpers/transform-date.helper';
import { mapText } from '../../config';
import { YearWrapper, YearSpan } from '../../styles/main';
import { YearContentInterface } from '../../types';

const YearContent = ({
	startDate,
	endDate = '',
	currentYear = false,
}: YearContentInterface) => {
	const { lang, dateFormat } = useContext(ConfigContext);

	const d = new Date();
	const _year = d.getFullYear();

	const _currentYear = currentYear ? (
		<>
			<time dateTime={_year.toString()}>{_year}</time>
		</>
	) : null;

	const _endDate =
		endDate !== '' ? (
			<>
				<YearSpan>{mapText[lang].to}</YearSpan>
				<time dateTime={endDate}>{mapDate[lang][dateFormat](endDate)}</time>
			</>
		) : null;

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
