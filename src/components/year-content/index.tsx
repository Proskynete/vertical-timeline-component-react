import React from 'react';
import { mapText } from '../../config';
import { YearWrapper, YearSpan } from '../../styles/main';
import { getAccessibilityDate, transformDate } from '../../helpers/transform-date.helper';
import { getAriaText } from '../../helpers/text.helper';
import { useConfig } from '../../hooks/useConfig';
import { YearContentProps } from '../../interfaces';

const YearContent = ({ active = false, endDate, startDate, withoutDay }: YearContentProps) => {
	const { config } = useConfig();

	const _active = active && (
		<time
			aria-hidden={true}
			dateTime={getAccessibilityDate({
				date: new Date(),
				lang: config.lang,
				withoutDay: config.withoutDay || withoutDay,
			})}
		>
			{new Date().getFullYear()}
		</time>
	);

	const _endDate = endDate && (
		<>
			<YearSpan aria-hidden={true}>{mapText[config.lang].to}</YearSpan>
			<time
				aria-hidden={true}
				dateTime={getAccessibilityDate({
					date: endDate,
					lang: config.lang,
					withoutDay: config.withoutDay || withoutDay,
				})}
			>
				{transformDate({
					date: endDate,
					lang: config.lang,
					type: config.dateFormat,
					withoutDay: config.withoutDay || withoutDay,
				})}
			</time>
		</>
	);

	const _startDate = (
		<>
			<YearSpan aria-hidden={true}>{mapText[config.lang].from}</YearSpan>
			<time
				aria-hidden={true}
				dateTime={getAccessibilityDate({
					date: startDate,
					lang: config.lang,
					withoutDay: config.withoutDay || withoutDay,
				})}
			>
				{transformDate({
					date: startDate,
					lang: config.lang,
					type: config.dateFormat,
					withoutDay: config.withoutDay || withoutDay,
				})}
			</time>
		</>
	);

	return (
		<YearWrapper
			format={config.dateFormat}
			lang={config.lang}
			aria-label={getAriaText({
				from: transformDate({
					date: startDate,
					lang: config.lang,
					type: 'full',
					withoutDay: config.withoutDay || withoutDay,
				}),
				to: transformDate({
					date: endDate || new Date(),
					lang: config.lang,
					type: 'full',
					withoutDay: config.withoutDay || withoutDay,
				}),
				lang: config.lang,
			})}
			style={config.customStyles?.date}
		>
			{_active}
			{_endDate}
			{_startDate}
		</YearWrapper>
	);
};

export default YearContent;
