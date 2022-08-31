import { mapText } from '../config';
import { Languages } from '../interfaces';

export const clearString = (str: string) => str.replace(/-/g, ' ').replace(/_/g, ' ');

interface GetAriaTextParams {
	from: string;
	to: string;
	today: boolean;
	lang: Languages;
}

export const getAriaText = ({ from, to, lang }: GetAriaTextParams) =>
	`${mapText[lang].from} ${from} ${mapText[lang].to} ${to}`;
