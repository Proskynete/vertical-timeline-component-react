import { DateFormat, Languages } from '../interfaces';
export interface ITransformDate {
    date: string | Date;
    lang: Languages;
    type: DateFormat;
    withoutDay?: boolean;
}
export declare const transformDate: ({ date, lang, type, withoutDay }: ITransformDate) => string;
export interface GetAccessibilityDateParams {
    date: string | Date;
    lang: Languages;
    withoutDay?: boolean;
}
export declare const getAccessibilityDate: ({ date, lang, withoutDay }: GetAccessibilityDateParams) => string;
