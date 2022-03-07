import { DateFormat } from '../config/index';
export declare const completeWith0: (n: number) => string | number;
interface ITransformDate {
    date: string;
    lang: string;
    type: DateFormat;
}
export declare const transformDate: ({ date, lang, type }: ITransformDate) => string;
export declare const mapDate: {
    en: {
        L: (date: string) => string;
        l: (date: string) => string;
        ll: (date: string) => string;
    };
    es: {
        L: (date: string) => string;
        l: (date: string) => string;
        ll: (date: string) => string;
    };
    de: {
        L: (date: string) => string;
        l: (date: string) => string;
        ll: (date: string) => string;
    };
    zh_CN: {
        L: (date: string) => string;
        l: (date: string) => string;
        ll: (date: string) => string;
    };
};
export {};
