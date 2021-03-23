import { DateFormatType, LangType } from '../types';
export interface HandlerTransformTextInterface {
    L: (date: string) => string;
    l: (date: string) => string;
    ll: (date: string) => string;
}
export interface TansformDateInterface {
    date: string;
    type: DateFormatType;
    lang: LangType;
}
export interface MapDateInterface {
    en: HandlerTransformTextInterface;
    es: HandlerTransformTextInterface;
    de: HandlerTransformTextInterface;
}
export declare const completeWith0: (n: number) => string | number;
export declare const transformDate: ({ date, lang, type, }: TansformDateInterface) => string;
export declare const mapDate: MapDateInterface;
