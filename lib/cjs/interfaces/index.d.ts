import { CSSProperties } from 'react';
export declare type DateFormat = 'only-number' | 'short' | 'with-weekday' | 'full';
export declare type Languages = 'en' | 'es' | 'de' | 'tr' | 'zh';
export interface Theme {
    yearColor: string;
    lineColor: string;
    dotColor: string;
    borderDotColor: string;
    titleColor: string;
    subtitleColor: string;
    eventColor: string;
    descriptionColor: string;
}
interface CustomStyles {
    date?: CSSProperties;
    title?: CSSProperties;
    subtitle?: CSSProperties;
    event?: CSSProperties;
    description?: CSSProperties;
}
export interface TimelineProps {
    theme?: Theme;
    lang?: Languages;
    dateFormat?: DateFormat;
    collapse?: boolean;
    withoutDay?: boolean;
    descriptionSymbol?: string;
    customStyles?: CustomStyles;
}
export interface DefaultTimelineProps {
    theme: Theme;
    lang: Languages;
    dateFormat: DateFormat;
    collapse: boolean;
    descriptionSymbol: string;
    customStyles?: CustomStyles;
    withoutDay: boolean;
}
export interface ContainerProps {
    title: string;
    subtitle?: string;
    startDate: string | Date;
    endDate?: string | Date;
    active?: boolean;
    withoutDay?: boolean;
}
export interface ContentProps {
    title: string;
    description: string[];
    collapse?: boolean;
}
export interface YearContentProps {
    startDate: string | Date;
    endDate?: string | Date;
    active?: boolean;
    withoutDay?: boolean;
}
export {};
