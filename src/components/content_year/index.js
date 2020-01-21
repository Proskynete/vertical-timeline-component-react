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
	width: 100px;

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

const handleGetDate = (m, d, y) => {
	if (d !== '' && m !== '') {
		return `${m}-${d}-${y}`;
	}
	if (m !== '') {
		return `${m}-${y}`;
	}
	if (d === '' && m === '') {
		return y;
	}
};

const handlePrintDate = (mounth, day, year, current) => {
	const _date = new Date();
	const startDate = handleGetDate(mounth, day, year);

	if (current) {
		return (
			<>
				<YearComponentItem className="item-year-component">
					{_date.getFullYear()}
				</YearComponentItem>
				<YearComponentItem className="item-year-component">
					{startDate}
				</YearComponentItem>
			</>
		);
	}
	return (
		<YearComponentItem className="item-year-component">
			{startDate}
		</YearComponentItem>
	);
};

const ContentYear = props => {
	const { startMonth, startDay, startYear, currentYear } = props;

	return (
		<YearComponent className="year-component">
			{handlePrintDate(startMonth, startDay, startYear, currentYear)}
		</YearComponent>
	);
};

ContentYear.defaultProps = {
	startMonth: '',
	startDay: '',
	currentYear: false
};

ContentYear.propTypes = {
	startMonth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	startDay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	startYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
	currentYear: PropTypes.bool
};

export default ContentYear;
