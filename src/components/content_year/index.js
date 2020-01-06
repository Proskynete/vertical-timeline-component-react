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
	width: 40px;

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

const compare = (a, b) => {
	if (a < b) return 1;
	if (b < a) return -1;
	return 0;
};

const handleEachYears = years =>
	years.sort(compare).map(year => (
		<YearComponentItem key={year} className="item-year-component">
			{year}
		</YearComponentItem>
	));

const ContentYear = props => {
	const { years } = props;

	return (
		<YearComponent className="year-component">
			{handleEachYears(years)}
		</YearComponent>
	);
};

ContentYear.propTypes = {
	years: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ContentYear;
