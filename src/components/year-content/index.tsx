import React, { PropsWithChildren, useContext } from 'react';
import { ConfigContext } from '../../context/config.context';
import { mapText } from '../../config';
import { YearWrapper, YearSpan } from '../../styles/main';
import { transformDate } from '../../helpers/transform-date.helper';
import { clearString } from '../../helpers/text.helper';

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
	const _lang = clearString(lang).split(' ')[0];

	const d = new Date();
	const _year = d.getFullYear();

	const _currentYear = currentYear && (
		<time dateTime={_year.toString()}>{_year}</time>
	);

	const _endDate = endDate && (
		<>
			<YearSpan>{mapText[_lang].to}</YearSpan>
			<time dateTime={endDate}>
				{transformDate({ date: endDate, lang: _lang, type: dateFormat })}
			</time>
		</>
	);

	const _startDate = (
		<>
			<YearSpan>{mapText[_lang].from}</YearSpan>
			<time dateTime={startDate}>
				{transformDate({ date: startDate, lang: _lang, type: dateFormat })}
			</time>
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
