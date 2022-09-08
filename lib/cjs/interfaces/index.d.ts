import { CSSProperties, ReactElement } from 'react';
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
    date?: CSSProperties;
    title?: CSSProperties;
    event?: CSSProperties;
    description?: CSSProperties;
}
export interface TimelineProps {
    theme?: Theme;
    lang?: Languages;
    dateFormat?: DateFormat;
    collapse?: boolean;
    withoutDay?: boolean;
    customStyles?: CustomStyles;
    children: ReactElement<ContainerProps> | ReactElement<ContainerProps>[];
}
export interface DefaultTimelineProps {
    theme: Theme;
    lang: Languages;
    dateFormat: DateFormat;
    collapse: boolean;
    customStyles?: CustomStyles;
    withoutDay: boolean;
}
export interface ContainerProps {
    title: string;
    startDate: string | Date;
    endDate?: string | Date;
    today?: boolean;
    withoutDay?: boolean;
    children: ReactElement<ContentProps> | ReactElement<ContentProps>[];
}
export interface ContentProps {
    title: string;
    description: string[];
    collapse?: boolean;
}
export interface YearContentProps {
    startDate: string | Date;
    endDate?: string | Date;
    today?: boolean;
    withoutDay?: boolean;
}
export {};
