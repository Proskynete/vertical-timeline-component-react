import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultValues } from '../../config';
import { ConfigContext } from '../../context/config.context';
import { DateFormat, Theme } from '../../interfaces';
import { TimelineWrapper, TimelineWrapperInner } from '../../styles/main';

interface TimelineProps {
	theme?: Theme;
	lang?: string;
	dateFormat?: DateFormat;
}

const Timeline = ({
	theme = defaultValues.theme,
	lang = defaultValues.lang,
	children,
	dateFormat = defaultValues.dateFormat,
}: PropsWithChildren<TimelineProps>) => {
	return (
		<TimelineWrapper>
			<TimelineWrapperInner>
				<ConfigContext.Provider value={{ lang, dateFormat }}>
					<ThemeProvider theme={theme}>{children}</ThemeProvider>
				</ConfigContext.Provider>
			</TimelineWrapperInner>
		</TimelineWrapper>
	);
};

export default Timeline;
