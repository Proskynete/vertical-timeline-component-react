import {
	DefaultValuesInterface,
	MonthInterface,
	TraductionInterface,
} from '../types';

export const defaultValues: DefaultValuesInterface = {
	theme: {
		yearColor: '#888888',
		lineColor: '#c5c5c5',
		dotColor: '#c5c5c5',
		borderDotColor: '#ffffff',
		titleColor: '#cccccc',
		subtitleColor: '#888888',
		textColor: '#cccccc',
	},
	lang: 'en',
	dateFormat: 'L',
};

export const monthArray: MonthInterface = {
	es: [
		'Ene',
		'Feb',
		'Mar',
		'Abr',
		'May',
		'Jun',
		'Jul',
		'Ago',
		'Sep',
		'Oct',
		'Nov',
		'Dic',
	],
	en: [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	],
	de: [
		'Jan.',
		'Feb.',
		'März',
		'Apr.',
		'Mai.',
		'Juni',
		'Juli',
		'Aug.',
		'Sep.',
		'Okt.',
		'Nov.',
		'Dez.',
	],
};

export const mapText: TraductionInterface = {
	en: {
		from: 'From',
		to: 'To',
	},
	es: {
		from: 'Desde',
		to: 'Hasta',
	},
	de: {
		from: 'Von',
		to: 'Bis',
	},
};
