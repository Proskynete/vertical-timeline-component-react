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
export interface DefaultValues {
    theme?: Theme;
    lang: string;
    dateFormat: DateFormat;
}
