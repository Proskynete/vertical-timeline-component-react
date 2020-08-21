import { monthArray } from '../config/index';

export const completeWith0 = (n) =>
	n.toLocaleString().length < 2 ? `0${n}` : n;

const transformDate = ({ date, lang, type }) => {
	const year = parseInt(date.split('/')[0], 10);
	const month = parseInt(date.split('/')[1], 10) - 1;
	const day = parseInt(date.split('/')[2], 10);

	switch (type) {
		case 'L':
			return lang === 'en'
				? `${month ? `${completeWith0(month)}/` : ''}${
						day ? `${completeWith0(day)}/` : ''
				  }${year}`
				: `${day ? `${completeWith0(day)}/` : ''}${
						month ? `${completeWith0(month)}/` : ''
				  }${year}`;
		case 'l':
			return lang === 'en'
				? `${month ? `${month}/` : ''}${day ? `${day}/` : ''}${year}`
				: `${day ? `${day}/` : ''}${month ? `${month}/` : ''}${year}`;
		case 'll':
			return lang === 'en'
				? `${month ? `${monthArray[lang][month]}` : ''}${
						day ? ` ${completeWith0(day)}` : ''
				  }${day || month ? ', ' : ''}${year}`
				: `${day ? `${day} de ` : ''}${
						month ? `${monthArray[lang][month]}, ` : ''
				  }${year}`;
		default:
			return false;
	}
};

export const mapDate = {
	en: {
		L: (date) => transformDate({ date, lang: 'en', type: 'L' }),
		l: (date) => transformDate({ date, lang: 'en', type: 'l' }),
		ll: (date) => transformDate({ date, lang: 'en', type: 'll' }),
	},
	es: {
		L: (date) => transformDate({ date, lang: 'es', type: 'L' }),
		l: (date) => transformDate({ date, lang: 'es', type: 'l' }),
		ll: (date) => transformDate({ date, lang: 'es', type: 'll' }),
	},
};
