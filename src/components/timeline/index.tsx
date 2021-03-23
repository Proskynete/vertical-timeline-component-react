import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultValues } from '../../config';
import { ConfigContext } from '../../context/config.context';
import { TimelineWrapper, TimelineWrapperInner } from '../../styles/main';
import { TimelineInterface } from '../../types';

const Timeline = ({
	theme = defaultValues.theme,
	lang = defaultValues.lang,
	dateFormat = defaultValues.dateFormat,
	children,
}: TimelineInterface) => (
	<TimelineWrapper>
		<TimelineWrapperInner>
			<ConfigContext.Provider value={{ lang, dateFormat }}>
				<ThemeProvider theme={theme}>{children}</ThemeProvider>
			</ConfigContext.Provider>
		</TimelineWrapperInner>
	</TimelineWrapper>
);

export default Timeline;
