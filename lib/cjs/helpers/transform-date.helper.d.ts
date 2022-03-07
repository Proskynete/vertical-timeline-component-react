import { DateFormat } from '../config/index';
interface ITransformDate {
    date: string;
    lang: string;
    type: DateFormat;
}
export declare const transformDate: ({ date, lang, type }: ITransformDate) => string;
export {};
