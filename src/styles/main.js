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

// YearContent component
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

// Section component
export const BodyWrapper = styled.article`
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

export const Title = styled.p`
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

// Description component
export const Subtitle = styled.div`
	color: ${(props) => props.theme.subtitleColor};
	font-size: 14px;
	font-style: italic;
	font-weight: 400;

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
