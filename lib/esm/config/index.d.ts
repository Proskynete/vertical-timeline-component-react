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
export declare const defaultValues: DefaultValues;
export declare const mapText: {
    en: {
        from: string;
        to: string;
    };
    es: {
        from: string;
        to: string;
    };
    de: {
        from: string;
        to: string;
    };
    tr: {
        from: string;
        to: string;
    };
    zh: {
        from: string;
        to: string;
    };
};
