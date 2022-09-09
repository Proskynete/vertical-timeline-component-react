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
	font-size: 0.875rem;
	font-weight: normal;
	height: max-content;
	margin: 0;
	max-width: ${({ format, lang }) =>
		`${enumWidth()[`${format}_${clearString(lang as string).split(' ')[0]}`]}px`};
	min-width: ${({ format, lang }) =>
		`${enumWidth()[`${format}_${clearString(lang as string).split(' ')[0]}`]}px`};
`;

export const YearSpan = styled.span`
	font-size: 0.625rem;
	margin: 3px 0 0 0;
	padding: 0;
`;

export const BodyWrapper = styled.article`
	padding-bottom: 15px;
	padding-left: 25px;
	min-height: 75px;
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
	font-size: 1rem;
	font-weight: bold;
	margin: 0;

	&:after {
		background-color: ${(props) => props.theme.dotColor};
		border-radius: 50%;
		border: 2px solid ${(props) => props.theme.borderDotColor};
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

export const BodyInner = styled.div`
	font-size: 1rem;
	list-style-type: none;
	margin: 5px 0 16px;
	max-width: 100%;
	padding: 0;

	&:last-child {
		margin-bottom: 0;
	}
`;

interface IconProps {
	readonly isShowing?: boolean;
}

export const Icon = styled.i<IconProps>`
	font-style: normal;
	margin-right: 3px;
	transform: rotate(${(props) => (props.isShowing ? '90deg' : '0deg')});

	@media (prefers-reduced-motion: no-preference) {
		transition: transform 0.2s ease-in-out;
	}
`;

interface EventTitleProps {
	readonly collapse?: boolean;
}

export const EventTitle = styled.h3<EventTitleProps>`
	align-content: center;
	align-items: flex-start;
	color: ${(props) => props.theme.subtitleColor};
	cursor: ${(props) => (props.collapse ? 'pointer' : 'default')};
	display: flex;
	font-size: 0.875rem;
	font-weight: bold;
	margin: 0;
	max-width: 100%;

	&:not(:first-child) {
		margin-top: 5px;
	}
`;

export const DescriptionWrapper = styled.div`
	padding-left: 10px;
`;

export const Description = styled.p`
	color: ${(props) => props.theme.textColor};
	font-size: 0.875rem;
	margin: 3px 0 0 0;
`;

export const TextErrorMessage = styled.p`
	color: ${(props) => props.theme.textColor};
	font-size: 0.875rem;
	text-align: center;
	width: 100%;

	code {
		background-color: ${(props) => props.theme.dotColor};
		color: ${(props) => props.theme.subtitleColor};
		display: inline-block;
		font-size: 0.875rem;
		padding: 3px 5px;
		border-radius: 5px;
	}
`;
