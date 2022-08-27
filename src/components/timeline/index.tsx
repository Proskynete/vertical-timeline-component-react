import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultValues } from '../../config';
import { ConfigContext } from '../../context/config.context';
import { TimelineProps } from '../../interfaces';
import { TimelineWrapper, TimelineWrapperInner } from '../../styles/main';

const Timeline = ({
	theme = defaultValues.theme,
	lang = defaultValues.lang,
	dateFormat = defaultValues.dateFormat,
	collapse = defaultValues.collapse,
	children,
}: PropsWithChildren<TimelineProps>) => {
	return (
		<TimelineWrapper>
			<TimelineWrapperInner>
				<ConfigContext.Provider value={{ lang, dateFormat, collapse }}>
					<ThemeProvider theme={theme}>{children}</ThemeProvider>
				</ConfigContext.Provider>
			</TimelineWrapperInner>
		</TimelineWrapper>
	);
};

export default Timeline;
