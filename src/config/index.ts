export interface Theme {
	yearColor: string;
	lineColor: string;
	dotColor: string;
	borderDotColor: string;
	titleColor: string;
	subtitleColor: string;
	textColor: string;
}

export type DateFormat = 'L' | 'l' | 'll';

export interface DefaultValues {
	theme?: Theme;
	lang: string;
	dateFormat: DateFormat;
}

export const defaultValues: DefaultValues = {
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

export const monthArray = {
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
	tr: [
		'Ocak',
		'Şubat',
		'Mart',
		'Nisan',
		'Mayıs',
		'Haziran',
		'Temmuz',
		'Ağustos',
		'Eylül',
		'Ekim',
		'Kasım',
		'Aralık',
	],
	zh_CN: [
		'一月',
		'二月',
		'三月',
		'四月',
		'五月',
		'六月',
		'七月',
		'八月',
		'九月',
		'十月',
		'十一月',
		'十二月',
	],
};

export const mapText = {
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
	tr: {
		from: 'Başlangıç',
		to: 'Bitiş',
	},
	zh_CN: {
		from: '从',
		to: '到',
	},
};
