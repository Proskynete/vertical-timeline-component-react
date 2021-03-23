import styled from 'styled-components';
import { ThemeInterface } from '../types';
import { ContainerWrapper } from './_container';

interface BodyWrapperProps {
	theme: ThemeInterface;
}

interface TitleProps {
	theme: ThemeInterface;
}

export const BodyWrapper = styled.article<BodyWrapperProps>`
	padding-bottom: 20px;
	padding-left: 25px;
	position: relative;

	&:first-of-type {
		margin-top: -20px;
	}

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

export const Title = styled.p<TitleProps>`
	color: ${(props) => props.theme.titleColor};
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
