import { CSSProperties } from 'react';
export declare type DateFormat = 'only-number' | 'short' | 'with-weekday' | 'full';
export declare type Languages = 'en' | 'es' | 'de' | 'tr' | 'zh';
export interface Theme {
    borderDotColor: string;
    descriptionColor: string;
    dotColor: string;
    eventColor: string;
    lineColor: string;
    subtitleColor: string;
    titleColor: string;
    yearColor: string;
}
interface CustomStyles {
    date?: CSSProperties;
    description?: CSSProperties;
    event?: CSSProperties;
    subtitle?: CSSProperties;
    title?: CSSProperties;
}
export interface TimelineProps {
    collapse?: boolean;
    customStyles?: CustomStyles;
    dateFormat?: DateFormat;
    descriptionSymbol?: string;
    lang?: Languages;
    theme?: Theme;
    withoutDay?: boolean;
}
export interface DefaultTimelineProps {
    collapse: boolean;
    customStyles?: CustomStyles;
    dateFormat: DateFormat;
    descriptionSymbol: string;
    lang: Languages;
    theme: Theme;
    withoutDay: boolean;
}
export interface EventsProps {
    active?: boolean;
    defaultClosed?: boolean;
    endDate?: string | Date;
    startDate: string | Date;
    subtitle?: string;
    title: string | JSX.Element | (() => JSX.Element);
    withoutDay?: boolean;
}
export interface EventProps {
    defaultClosed?: boolean;
    description: string[];
    title?: string;
}
export interface YearContentProps {
    active?: boolean;
    endDate?: string | Date;
    startDate: string | Date;
    withoutDay?: boolean;
}
export {};
