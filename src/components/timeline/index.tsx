import React, { Children, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultValues } from '../../config';
import { ConfigProvider } from '../../context/config.context';
import { TimelineProps } from '../../interfaces';
import { TimelineWrapper, TimelineWrapperInner } from '../../styles/main';
import { Container } from '../container';

const Timeline = ({
	theme = defaultValues.theme,
	lang = defaultValues.lang,
	dateFormat = defaultValues.dateFormat,
	collapse = defaultValues.collapse,
	withoutDay = defaultValues.withoutDay,
	customStyles,
	children,
}: TimelineProps) => {
	const elements = Children.map(children, (child) =>
		(child as ReactElement).type === Container ? child : null,
	)?.filter(Boolean);

	return (
		<TimelineWrapper>
			<TimelineWrapperInner>
				<ConfigProvider config={{ theme, lang, dateFormat, collapse, customStyles, withoutDay }}>
					<ThemeProvider theme={theme}>{elements}</ThemeProvider>
				</ConfigProvider>
			</TimelineWrapperInner>
		</TimelineWrapper>
	);
};

export { Timeline };
