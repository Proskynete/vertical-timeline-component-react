import { DateFormat, LangAllowed } from '../interfaces';
interface ITransformDate {
    date: string;
    lang: LangAllowed;
    type: DateFormat;
}
export declare const transformDate: ({ date, lang, type }: ITransformDate) => string;
export {};
