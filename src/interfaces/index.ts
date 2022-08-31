import { CSSProperties } from 'react';

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

export type Languages = 'en' | 'es' | 'de' | 'tr' | 'zh';

interface CustomStyles {
	date: CSSProperties;
	title: CSSProperties;
	event: CSSProperties;
	description: CSSProperties;
}

export interface TimelineProps {
	theme?: Theme;
	lang?: Languages;
	dateFormat?: DateFormat;
	collapse?: boolean;
	customStyles?: CustomStyles;
}

export interface DefaultTimelineProps {
	theme: Theme;
	lang: Languages;
	dateFormat: DateFormat;
	collapse: boolean;
	customStyles?: CustomStyles;
}
