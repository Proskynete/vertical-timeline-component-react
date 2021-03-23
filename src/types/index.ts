type DescriptionVariantType = 'subtitle' | 'description';
type LangType = 'en' | 'es' | 'de';
type DateFormatType = 'L' | 'l' | 'll';

export interface ContainerInterface {
	children: JSX.Element | JSX.Element[];
}

export interface DescriptionInterface {
	text: string;
	variant?: DescriptionVariantType;
}

export interface SectionInterface {
	title: string;
	children: JSX.Element | JSX.Element[];
}

export interface ThemeInterface {
	yearColor: string;
	lineColor: string;
	dotColor: string;
	borderDotColor: string;
	titleColor: string;
	subtitleColor: string;
	textColor: string;
}

export interface TimelineInterface {
	theme?: ThemeInterface;
	lang?: LangType;
	dateFormat?: DateFormatType;
	children: JSX.Element | JSX.Element[];
}

export interface DefaultValuesInterface {
	theme: ThemeInterface;
	lang: LangType;
	dateFormat: DateFormatType;
}

export interface MonthInterface {
	en: string[];
	es: string[];
	de: string[];
}

export interface FromToInterface {
	from: string;
	to: string;
}

export interface TraductionInterface {
	en: FromToInterface;
	es: FromToInterface;
	de: FromToInterface;
}

export interface YearContentInterface {
	startDate: string;
	endDate?: string;
	currentYear?: boolean;
}

export interface TansformDateInterface {
	date: string;
	type: DateFormatType;
	lang: LangType;
}

export interface HandlerTransformTextInterface {
	L: (date: string) => string;
	l: (date: string) => string;
	ll: (date: string) => string;
}

export interface MapDateInterface {
	en: HandlerTransformTextInterface;
	es: HandlerTransformTextInterface;
	de: HandlerTransformTextInterface;
}

export interface YearWrapperProps {
	format: DateFormatType;
	lang: LangType;
	theme: ThemeInterface;
}

export interface BodyWrapperProps {
	theme: ThemeInterface;
}

export interface TitleProps {
	theme: ThemeInterface;
}

export interface SubtitleProps {
	theme: ThemeInterface;
}

export interface DescriptionTextProps {
	theme: ThemeInterface;
}
