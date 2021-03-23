export declare type DescriptionVariantType = 'subtitle' | 'description';
export declare type LangType = 'en' | 'es' | 'de';
export declare type DateFormatType = 'L' | 'l' | 'll';
interface ChildrenInterface {
    children: JSX.Element | JSX.Element[];
}
export interface ContainerInterface extends ChildrenInterface {
}
export interface DescriptionInterface {
    text: string;
    variant?: DescriptionVariantType;
}
export interface SectionInterface extends ChildrenInterface {
    title: string;
}
export interface ThemeInterface {
    yearColor?: string;
    lineColor?: string;
    dotColor?: string;
    borderDotColor?: string;
    titleColor?: string;
    subtitleColor?: string;
    textColor?: string;
}
export interface TimelineInterface extends ChildrenInterface {
    theme?: ThemeInterface;
    lang?: LangType;
    dateFormat?: DateFormatType;
}
export interface DefaultValuesInterface {
    theme: ThemeInterface;
    lang: LangType;
    dateFormat: DateFormatType;
}
export interface MonthInterface {
    en: string[];
    es: string[];
    de: string[];
}
export interface FromToInterface {
    from: string;
    to: string;
}
export interface TraductionInterface {
    en: FromToInterface;
    es: FromToInterface;
    de: FromToInterface;
}
export interface YearContentInterface {
    startDate: string;
    endDate?: string;
    currentYear?: boolean;
}
export {};
