import styled from 'styled-components';
import { DateFormatType, LangType, ThemeInterface } from '../types';

interface YearWrapperProps {
	format: DateFormatType;
	lang: LangType;
	theme: ThemeInterface;
}

export const YearWrapper = styled.p<YearWrapperProps>`
	align-items: flex-end;
	color: ${(props) => props.theme.yearColor};
	display: flex;
	flex-direction: column;
	font-size: 14px;
	font-weight: 400;
	height: max-content;
	margin: 0;
	min-width: ${(props) =>
		props.format === 'L'
			? '80px'
			: props.format === 'l'
			? '80px'
			: props.lang === 'en'
			? '90px'
			: '105px'};
`;

export const YearSpan = styled.span`
	font-size: 10px;
	margin: 3px 0 0 0;
	padding: 0;
`;
