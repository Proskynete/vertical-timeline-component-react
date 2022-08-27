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
export declare type LangAllowed = 'en' | 'es' | 'de' | 'tr' | 'zh';
export interface TimelineProps {
    theme?: Theme;
    lang?: LangAllowed;
    dateFormat?: DateFormat;
    collapse?: boolean;
}
export interface DefaultTimelineProps {
    theme?: Theme;
    lang: LangAllowed;
    dateFormat: DateFormat;
    collapse?: boolean;
}
