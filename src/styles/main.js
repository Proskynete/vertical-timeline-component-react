import styled from 'styled-components';

// Timeline Component
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

// Container component
export const ContainerWrapper = styled.section`
	align-items: baseline;
	display: flex;
	position: relative;
`;

export const BodyContent = styled.div``;

// Content-Year component
export const YearWrapper = styled.p`
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
