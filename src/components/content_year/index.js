import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const YearComponent = styled.div`
	color: #002a3a;
	font-size: 1em;
	font-weight: 400;
	padding-right: 15px;
	padding-bottom: 10px;
	position: relative;
	text-align: right;
	width: 50px;

	&::after {
		background: #ccc;
		border-radius: 50%;
		content: '';
		height: 6px;
		position: absolute;
		right: -1px;
		top: 5px;
		width: 6px;
	}
`;

const YearComponentItem = styled.div`
	margin-bottom: 8px;
`;

const ContentYear = props => {
	const { startYear, currentYear } = props;
	const _date = new Date();

	return (
		<YearComponent className="year-component">
			{currentYear ? (
				<>
					<YearComponentItem className="item-year-component">
						{_date.getFullYear()}
					</YearComponentItem>
					<YearComponentItem className="item-year-component">
						{startYear}
					</YearComponentItem>
				</>
			) : (
				<YearComponentItem className="item-year-component">
					{startYear}
				</YearComponentItem>
			)}
		</YearComponent>
	);
};

ContentYear.defaultProps = {
	currentYear: false
};

ContentYear.propTypes = {
	startYear: PropTypes.number.isRequired,
	currentYear: PropTypes.bool
};

export default ContentYear;
