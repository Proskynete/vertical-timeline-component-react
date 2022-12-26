import { DefaultTimelineProps } from '../interfaces';

export const defaultValues: DefaultTimelineProps = {
	theme: {
		yearColor: '#888888',
		lineColor: '#c5c5c5',
		dotColor: '#c5c5c5',
		borderDotColor: '#ffffff',
		titleColor: '#cccccc',
		subtitleColor: '#888888',
		eventColor: '#cccccc',
		descriptionColor: '#cccccc',
	},
	lang: 'en',
	dateFormat: 'only-number',
	collapse: false,
	descriptionSymbol: '•',
	withoutDay: false,
};

export const mapText = {
	en: { from: 'From', to: 'To' },
	es: { from: 'Desde', to: 'Hasta' },
	de: { from: 'Von', to: 'Bis' },
	tr: { from: 'Başlangıç', to: 'Bitiş' },
	zh: { from: '从', to: '到' },
};
