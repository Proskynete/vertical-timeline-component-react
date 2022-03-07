import React from 'react';
import { shape, node, oneOf, oneOfType, arrayOf } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { defaultValues } from '../../config';
import { ConfigContext } from '../../context/config.context';
import { TimelineWrapper, TimelineWrapperInner } from '../../styles/main';
var Timeline = function (props) {
    var theme = props.theme, lang = props.lang, children = props.children, dateFormat = props.dateFormat;
    return (React.createElement(TimelineWrapper, null,
        React.createElement(TimelineWrapperInner, null,
            React.createElement(ConfigContext.Provider, { value: { lang: lang, dateFormat: dateFormat } },
                React.createElement(ThemeProvider, { theme: theme }, children)))));
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
