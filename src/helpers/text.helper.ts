import { mapText } from '../config';
import { Languages } from '../interfaces';

export const clearString = (str: string) => str.replace(/-/g, ' ').replace(/_/g, ' ');

export interface GetAriaTextParams {
	from: string;
	lang: Languages;
	to: string;
}

export const getAriaText = ({ from, to, lang }: GetAriaTextParams) =>
	`${mapText[lang].from} ${from} ${mapText[lang].to} ${to}`;
