import { PropsWithChildren } from 'react';
import { DateFormat, Theme } from '../../interfaces';
interface TimelineProps {
    theme?: Theme;
    lang?: string;
    dateFormat?: DateFormat;
}
declare const Timeline: ({ theme, lang, children, dateFormat, }: PropsWithChildren<TimelineProps>) => JSX.Element;
export default Timeline;
