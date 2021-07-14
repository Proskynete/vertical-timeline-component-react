import React from 'react';
import { shape, node, oneOf, oneOfType, arrayOf } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { defaultValues } from '../../config';
import { ConfigContext } from '../../context/config.context';
import { TimelineWrapper, TimelineWrapperInner } from '../../styles/main';

const Timeline = (props) => {
	const { theme, lang, children, dateFormat } = props;

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

Timeline.defaultProps = {
	theme: {
		yearColor: defaultValues.theme.yearColor,
		lineColor: defaultValues.theme.lineColor,
		dotColor: defaultValues.theme.dotColor,
		borderDotColor: defaultValues.theme.borderDotColor,
		titleColor: defaultValues.theme.titleColor,
		subtitleColor: defaultValues.theme.subtitleColor,
		textColor: defaultValues.theme.textColor,
	},
	lang: defaultValues.lang,
	dateFormat: defaultValues.dateFormat,
};

Timeline.propTypes = {
	theme: shape({}),
	lang: oneOf(['es', 'en', 'de', 'tr']),
	dateFormat: oneOf(['L', 'l', 'll']),
	children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Timeline;
