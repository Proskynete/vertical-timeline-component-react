import { DateFormat, Languages } from '../interfaces';
export interface ITransformDate {
    date: string | Date;
    lang: Languages;
    type: DateFormat;
}
export declare const transformDate: ({ date, lang, type }: ITransformDate) => string;
export interface GetAccessibilityDateParams {
    date: string | Date;
    lang: Languages;
}
export declare const getAccessibilityDate: ({ date, lang }: GetAccessibilityDateParams) => string;
