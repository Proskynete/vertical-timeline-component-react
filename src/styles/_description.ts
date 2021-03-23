import styled from 'styled-components';
import { ThemeInterface } from '../types';

interface SubtitleProps {
	theme: ThemeInterface;
}

interface DescriptionTextProps {
	theme: ThemeInterface;
}

export const Subtitle = styled.div<SubtitleProps>`
	color: ${(props) => props.theme.subtitleColor};
	font-size: 14px;
	font-style: italic;
	font-weight: 400;

	&:not(:first-of-type) {
		margin-top: 10px;
	}
`;

export const DescriptionText = styled.li<DescriptionTextProps>`
	color: ${(props) => props.theme.textColor};

	&:not(:first-of-type) {
		margin-top: 3px;
	}
`;
