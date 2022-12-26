import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultValues } from '../../config';
import { ConfigProvider } from '../../context/config.context';
import { TimelineProps } from '../../interfaces';
import { TimelineWrapper, TimelineWrapperInner } from '../../styles/main';
import { Events } from '../events';
import { Validate } from '../validate';

const Timeline = ({
	theme = defaultValues.theme,
	lang = defaultValues.lang,
	dateFormat = defaultValues.dateFormat,
	collapse = defaultValues.collapse,
	withoutDay = defaultValues.withoutDay,
	customStyles,
	children,
}: PropsWithChildren<TimelineProps>) => {
	return (
		<TimelineWrapper>
			<TimelineWrapperInner>
				<ConfigProvider config={{ theme, lang, dateFormat, collapse, customStyles, withoutDay }}>
					<ThemeProvider theme={theme}>
						<Validate componentToValidate={Events}>{children}</Validate>
					</ThemeProvider>
				</ConfigProvider>
			</TimelineWrapperInner>
		</TimelineWrapper>
	);
};

export { Timeline };
