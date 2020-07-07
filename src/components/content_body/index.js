/* eslint-disable no-tabs */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BodyComponent = styled.div`
	font-size: 0.9em;
	padding-bottom: 30px;
	padding-left: 15px;
	position: relative;

	@media (min-width: 1200px) {
		font-size: 1em;
	}

	&::before {
		content: '';
		background-color: #cccccc;
		height: 100%;
		left: -3px;
		min-height: 95%;
		position: absolute;
		top: 10px;
		width: 2px;
	}
`;


const ContentBody = (props) => {
	const { title, children, textColor } = props;

	const BodyComponentTitle = styled.p`
		color: ${textColor};
		font-weight: bold;
		margin-bottom: 10px;
		font-size: 18px;
		margin-top: 0;
		text-align: left;
	`;

	return (
		<BodyComponent className='body-component'>
			<BodyComponentTitle className='title-body-component'>
				{title}
			</BodyComponentTitle>
			{children}
		</BodyComponent>
	);
};

ContentBody.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	textColor: PropTypes.string.isRequired,
};

export default ContentBody;
