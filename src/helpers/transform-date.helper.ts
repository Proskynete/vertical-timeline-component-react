import { monthArray } from '../config/index';
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

export const completeWith0 = (n: number) =>
	n.toLocaleString().length < 2 ? `0${n}` : n;

export const transformDate = ({
	date,
	lang,
	type,
}: TansformDateInterface): string => {
	const year = parseInt(date.split('/')[0], 10);
	const month = parseInt(date.split('/')[1], 10);
	const day = parseInt(date.split('/')[2], 10);

	switch (type) {
		case 'L':
			if (lang === 'en') {
				return `${month ? `${completeWith0(month)}/` : ''}${
					day ? `${completeWith0(day)}/` : ''
				}${year}`;
			} else if (lang === 'es') {
				return `${day ? `${completeWith0(day)}/` : ''}${
					month ? `${completeWith0(month)}/` : ''
				}${year}`;
			} else {
				return `${
					day && month
						? `${completeWith0(day)}.${completeWith0(month)}.${year}`
						: `${month ? `${completeWith0(month)}/` : ''}${year}`
				}`;
			}
		case 'l':
			if (lang === 'en') {
				return `${month ? `${month}/` : ''}${day ? `${day}/` : ''}${year}`;
			} else if (lang === 'es') {
				return `${day ? `${day}/` : ''}${month ? `${month}/` : ''}${year}`;
			} else {
				return `${
					day && month
						? `${day}.${month}.${year}`
						: `${month ? `${month}/` : ''}${year}`
				}`;
			}
		case 'll':
			if (lang === 'en') {
				return `${month ? `${monthArray[lang][month - 1]}` : ''}${
					day ? ` ${completeWith0(day)}` : ''
				}${day || month ? ', ' : ''}${year}`;
			} else if (lang === 'es') {
				return `${day ? `${day} de ` : ''}${
					month ? `${monthArray[lang][month - 1]}, ` : ''
				}${year}`;
			} else {
				return `${day ? `${day}. ` : ''}${
					month ? `${monthArray[lang][month - 1]} ` : ''
				}${year}`;
			}
	}
};

export const mapDate: MapDateInterface = {
	en: {
		L: (date) => transformDate({ date, lang: 'en', type: 'L' }),
		l: (date: string) => transformDate({ date, lang: 'en', type: 'l' }),
		ll: (date: string) => transformDate({ date, lang: 'en', type: 'll' }),
	},
	es: {
		L: (date: string) => transformDate({ date, lang: 'es', type: 'L' }),
		l: (date: string) => transformDate({ date, lang: 'es', type: 'l' }),
		ll: (date: string) => transformDate({ date, lang: 'es', type: 'll' }),
	},
	de: {
		L: (date: string) => transformDate({ date, lang: 'de', type: 'L' }),
		l: (date: string) => transformDate({ date, lang: 'de', type: 'l' }),
		ll: (date: string) => transformDate({ date, lang: 'de', type: 'll' }),
	},
};
