import { LangAllowed } from '../interfaces';
export declare const clearString: (str: string) => string;
interface GetAriaTextParams {
    from: string;
    to: string;
    currentYear: boolean;
    lang: LangAllowed;
}
export declare const getAriaText: ({ from, to, lang }: GetAriaTextParams) => string;
export {};
