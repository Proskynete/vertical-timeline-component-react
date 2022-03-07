import { DateFormat } from '../config/index';

interface ITransformDate {
	date: string;
	lang: string;
	type: DateFormat;
}

export const transformDate = ({ date, lang, type }: ITransformDate) => {
	const _date = new Date(date);

	switch (type) {
		case 'only-number':
			return _date.toLocaleDateString(lang);
		case 'short':
			return _date.toLocaleDateString(lang, {
				year: 'numeric',
				month: 'short',
				day: '2-digit',
			});
		case 'with-weekday':
			return _date.toLocaleDateString(lang, {
				weekday: 'short',
				year: 'numeric',
				month: 'short',
				day: '2-digit',
			});
		case 'full':
			return _date.toLocaleDateString(lang, {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: '2-digit',
			});
	}
};
