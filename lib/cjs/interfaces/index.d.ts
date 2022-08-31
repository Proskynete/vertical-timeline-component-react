import { CSSProperties } from 'react';
export interface Theme {
    yearColor: string;
    lineColor: string;
    dotColor: string;
    borderDotColor: string;
    titleColor: string;
    subtitleColor: string;
    textColor: string;
}
export declare type DateFormat = 'only-number' | 'short' | 'with-weekday' | 'full';
export declare type Languages = 'en' | 'es' | 'de' | 'tr' | 'zh';
interface CustomStyles {
    date: CSSProperties;
    title: CSSProperties;
    event: CSSProperties;
    description: CSSProperties;
}
export interface TimelineProps {
    theme?: Theme;
    lang?: Languages;
    dateFormat?: DateFormat;
    collapse?: boolean;
    customStyles?: CustomStyles;
}
export interface DefaultTimelineProps {
    theme: Theme;
    lang: Languages;
    dateFormat: DateFormat;
    collapse: boolean;
    customStyles?: CustomStyles;
}
export {};
