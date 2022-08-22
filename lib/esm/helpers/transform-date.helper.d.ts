import { DateFormat, LangAllowed } from '../interfaces';
interface ITransformDate {
    date: string;
    lang: LangAllowed;
    type: DateFormat;
}
export declare const transformDate: ({ date, lang, type }: ITransformDate) => string;
interface GetAccessibilityDateParams {
    date: string;
    lang: LangAllowed;
}
export declare const getAccessibilityDate: ({ date, lang, }: GetAccessibilityDateParams) => string;
export {};
