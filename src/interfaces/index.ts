export interface Theme {
	yearColor: string;
	lineColor: string;
	dotColor: string;
	borderDotColor: string;
	titleColor: string;
	subtitleColor: string;
	textColor: string;
}

export type DateFormat = 'only-number' | 'short' | 'with-weekday' | 'full';

export type LangAllowed = 'en' | 'es' | 'de' | 'tr' | 'zh';

export interface TimelineProps {
	theme?: Theme;
	lang?: LangAllowed;
	dateFormat?: DateFormat;
}

export interface DefaultTimelineProps {
	theme?: Theme;
	lang: LangAllowed;
	dateFormat: DateFormat;
}
