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

const mapMonth = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sept',
	'Oct',
	'Nov',
	'Dec'
];

const handleTransformMonth = (m, t) => {
	if (t === 'number') {
		return m.length === 1 ? `0${m}` : m;
	}
	if (t === 'text') {
		const index = m - 1;
		return mapMonth[index];
	}
};

const handleGetDate = (m, t, d, y) => {
	const _m = handleTransformMonth(m, t);

	if (d !== '' && m !== '') {
		if (t === 'text') {
			return `${_m} ${d}, ${y}`;
		}
		return `${_m}-${d}-${y}`;
	}
	if (m !== '') {
		if (t === 'text') {
			return `${_m}, ${y}`;
		}
		return `${_m}-${y}`;
	}
	if (d === '' && m === '') {
		return y;
	}
};

const handlePrintDate = (mounth, day, year, month_type, current) => {
	const _date = new Date();
	const startDate = handleGetDate(mounth, month_type, day, year);

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
	const { startMonth, startDay, startYear, monthType, currentYear } = props;

	return (
		<YearComponent className="year-component">
			{handlePrintDate(startMonth, startDay, startYear, monthType, currentYear)}
		</YearComponent>
	);
};

ContentYear.defaultProps = {
	startMonth: '',
	monthType: 'number',
	startDay: '',
	currentYear: false
};

ContentYear.propTypes = {
	startMonth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	monthType: PropTypes.oneOf(['text', 'number']),
	startDay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	startYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
	currentYear: PropTypes.bool
};

export default ContentYear;
