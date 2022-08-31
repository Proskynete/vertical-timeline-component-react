import { DateFormat, Languages } from '../interfaces';
interface ITransformDate {
    date: string;
    lang: Languages;
    type: DateFormat;
}
export declare const transformDate: ({ date, lang, type }: ITransformDate) => string;
interface GetAccessibilityDateParams {
    date: string;
    lang: Languages;
}
export declare const getAccessibilityDate: ({ date, lang }: GetAccessibilityDateParams) => string;
export {};
