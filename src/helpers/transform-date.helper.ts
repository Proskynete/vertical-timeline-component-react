import { DateFormat, Languages } from '../interfaces';

export interface ITransformDate {
	date: string | Date;
	lang: Languages;
	type: DateFormat;
	withoutDay?: boolean;
}

export const transformDate = ({ date, lang, type, withoutDay }: ITransformDate) => {
	const _date = new Date(date);

	switch (type) {
		case 'only-number':
			return _date.toLocaleDateString(lang, {
				year: 'numeric',
				month: 'numeric',
				day: withoutDay ? undefined : 'numeric',
			});
		case 'short':
			return _date.toLocaleDateString(lang, {
				year: 'numeric',
				month: 'short',
				day: withoutDay ? undefined : '2-digit',
			});
		case 'with-weekday':
			return _date.toLocaleDateString(lang, {
				weekday: 'short',
				year: 'numeric',
				month: 'short',
				day: withoutDay ? undefined : '2-digit',
			});
		case 'full':
			return _date.toLocaleDateString(lang, {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: withoutDay ? undefined : '2-digit',
			});
	}
};

export interface GetAccessibilityDateParams {
	date: string | Date;
	lang: Languages;
	withoutDay?: boolean;
}

export const getAccessibilityDate = ({ date, lang, withoutDay }: GetAccessibilityDateParams) => {
	const _date = new Date(date);
	return _date.toLocaleDateString(lang, {
		year: 'numeric',
		month: 'numeric',
		day: withoutDay ? undefined : 'numeric',
	});
};
