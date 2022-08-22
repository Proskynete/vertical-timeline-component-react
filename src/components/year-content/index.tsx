import React, { PropsWithChildren, useContext } from 'react';
import { ConfigContext } from '../../context/config.context';
import { mapText } from '../../config';
import { YearWrapper, YearSpan } from '../../styles/main';
import {
	getAccessibilityDate,
	transformDate,
} from '../../helpers/transform-date.helper';
import { getAriaText } from '../../helpers/text.helper';

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

	const _currentYear = currentYear && (
		<time
			aria-hidden={true}
			dateTime={getAccessibilityDate({
				date: new Date().toISOString(),
				lang: lang,
			})}
		>
			{new Date().getFullYear()}
		</time>
	);

	const _endDate = endDate && (
		<>
			<YearSpan aria-hidden={true}>{mapText[lang].to}</YearSpan>
			<time
				aria-hidden={true}
				dateTime={getAccessibilityDate({ date: endDate, lang: lang })}
			>
				{transformDate({ date: endDate, lang: lang, type: dateFormat })}
			</time>
		</>
	);

	const _startDate = (
		<>
			<YearSpan aria-hidden={true}>{mapText[lang].from}</YearSpan>
			<time
				aria-hidden={true}
				dateTime={getAccessibilityDate({ date: startDate, lang: lang })}
			>
				{transformDate({ date: startDate, lang: lang, type: dateFormat })}
			</time>
		</>
	);

	return (
		<YearWrapper
			format={dateFormat}
			lang={lang}
			aria-label={getAriaText({
				from: transformDate({ date: startDate, lang: lang, type: 'full' }),
				to: transformDate({
					date: endDate || new Date().toISOString(),
					lang: lang,
					type: 'full',
				}),
				currentYear,
				lang,
			})}
		>
			{_currentYear}
			{_endDate}
			{_startDate}
		</YearWrapper>
	);
};

export default YearContent;
