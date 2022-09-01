import { Languages } from '../interfaces';
export declare const clearString: (str: string) => string;
export interface GetAriaTextParams {
    from: string;
    to: string;
    today: boolean;
    lang: Languages;
}
export declare const getAriaText: ({ from, to, lang }: GetAriaTextParams) => string;
