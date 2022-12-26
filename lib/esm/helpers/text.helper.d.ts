import { Languages } from '../interfaces';
export declare const clearString: (str: string) => string;
export interface GetAriaTextParams {
    from: string;
    lang: Languages;
    to: string;
}
export declare const getAriaText: ({ from, to, lang }: GetAriaTextParams) => string;
