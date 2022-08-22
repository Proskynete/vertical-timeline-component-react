import { mapText } from '../config';
import { LangAllowed } from '../interfaces';

export const clearString = (str: string) =>
	str.replace(/-/g, ' ').replace(/_/g, ' ');

interface GetAriaTextParams {
	from: string;
	to: string;
	currentYear: boolean;
	lang: LangAllowed;
}

export const getAriaText = ({ from, to, lang }: GetAriaTextParams) =>
	`${mapText[lang].from} ${from} ${mapText[lang].to} ${to}`;
