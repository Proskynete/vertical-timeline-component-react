import styled from 'styled-components';
import { clearString } from '../helpers/text.helper';
import { DateFormat } from '../interfaces';

export const TimelineWrapper = styled.div`
	display: flex;
	height: 100%;
	position: relative;
	width: 100%;
`;

export const TimelineWrapperInner = styled.div`
	padding: 15px 10px;
	width: 100%;
`;

export const ContainerWrapper = styled.section`
	align-items: baseline;
	display: flex;
	position: relative;
`;

export const BodyContent = styled.div``;

interface YearContentProps {
	readonly format: DateFormat;
}

const enumWidth = () => ({
	'only-number_es': '85',
	'only-number_en': '85',
	'only-number_de': '85',
	'only-number_tr': '85',
	'only-number_zh': '85',
	short_es: '85',
	short_en: '90',
	short_de: '95',
	short_tr: '95',
	short_zh: '115',
	'with-weekday_es': '125',
	'with-weekday_en': '125',
	'with-weekday_de': '130',
	'with-weekday_tr': '130',
	'with-weekday_zh': '140',
	full_es: '125',
	full_en: '125',
	full_de: '125',
	full_tr: '125',
	full_zh: '125',
});

export const YearWrapper = styled.div<YearContentProps>`
	align-items: flex-end;
	color: ${({ theme }) => theme.yearColor};
	display: flex;
	flex-direction: column;
	font-size: 14px;
	font-weight: 400;
	height: max-content;
	margin: 0;
	max-width: ${({ format, lang }) =>
		`${
			enumWidth()[`${format}_${clearString(lang as string).split(' ')[0]}`]
		}px`};
	min-width: ${({ format, lang }) =>
		`${
			enumWidth()[`${format}_${clearString(lang as string).split(' ')[0]}`]
		}px`};
	text-align: end;
`;

export const YearSpan = styled.span`
	font-size: 10px;
	margin: 3px 0 0 0;
	padding: 0;
`;

export const BodyWrapper = styled.article`
	padding-bottom: 20px;
	padding-left: 25px;
	position: relative;

	&:after,
	${ContainerWrapper}:last-of-type &:last-of-type:after {
		background-color: ${(props) => props.theme.lineColor};
		bottom: 0;
		box-sizing: content-box;
		content: '';
		height: 100%;
		left: 10px;
		top: 5px;
		position: absolute;
		width: 2px;
		z-index: 1;
	}

	${ContainerWrapper}:last-of-type &:last-of-type:after {
		box-sizing: content-box;
		display: none;
	}
`;

interface TitleProps {
	readonly collapse?: boolean;
}

export const Title = styled.h2<TitleProps>`
	color: ${(props) => props.theme.titleColor};
	cursor: ${(props) => (props.collapse ? 'pointer' : 'default')};
	font-size: 16px;
	font-weight: 500;
	margin: 0;

	&:after {
		background-color: ${(props) => props.theme.dotColor};
		border: 2px solid ${(props) => props.theme.borderDotColor};
		border-radius: 50%;
		box-sizing: content-box;
		content: '';
		height: 6px;
		left: 6px;
		position: absolute;
		top: 4px;
		width: 6px;
		z-index: 2;
	}
`;

export const BodyInner = styled.ul`
	font-size: 16px;
	list-style-type: none;
	margin: 5px 0 16px;
	max-width: 100%;
	padding: 0;

	&:last-child {
		margin-bottom: 0;
	}
`;

interface SubtitleProps {
	readonly collapse?: boolean;
}

export const Subtitle = styled.p<SubtitleProps>`
	color: ${(props) => props.theme.subtitleColor};
	font-size: 14px;
	font-style: italic;
	font-weight: 400;
	margin: 0;
	cursor: ${(props) => (props.collapse ? 'pointer' : 'default')};

	&:not(:first-of-type) {
		margin-top: 10px;
	}
`;

export const DescriptionText = styled.li`
	color: ${(props) => props.theme.textColor};

	&:not(:first-of-type) {
		margin-top: 3px;
	}
`;

export const DescriptionSubtitle = styled.li`
	color: ${(props) => props.theme.subtitleColor};
	font-size: 14px;
	font-style: italic;
	font-weight: 400;

	&:not(:first-of-type) {
		margin-top: 10px;
	}
`;
