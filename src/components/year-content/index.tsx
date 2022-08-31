import React, { PropsWithChildren } from 'react';
import { mapText } from '../../config';
import { YearWrapper, YearSpan } from '../../styles/main';
import {
	getAccessibilityDate,
	transformDate,
} from '../../helpers/transform-date.helper';
import { getAriaText } from '../../helpers/text.helper';
import { useConfig } from '../../hooks/useConfig';

interface YearContentProps {
	startDate: string;
	endDate?: string;
	today?: boolean;
}

const YearContent = ({
	startDate,
	endDate,
	today = false,
}: PropsWithChildren<YearContentProps>) => {
	const {
		config: { lang, dateFormat, customStyles },
	} = useConfig();

	const _today = today && (
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
				today,
				lang,
			})}
			style={customStyles?.date}
		>
			{_today}
			{_endDate}
			{_startDate}
		</YearWrapper>
	);
};

export default YearContent;
