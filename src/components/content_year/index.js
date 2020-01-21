/* eslint-disable no-tabs */
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
  'Dec',
];

const handleTransformMonth = (month, type) => {
  if (type === 'number') {
    return month.length === 1 ? `0${month}` : month;
  }
  const index = month - 1;
  return mapMonth[index];
};

const handleGetDate = (month, type, day, year) => {
  const newMonth = handleTransformMonth(month, type);

  if (day !== '' && month !== '') {
    if (type === 'text') {
      return `${newMonth} ${day}, ${year}`;
    }
    return `${newMonth}-${day}-${year}`;
  }
  if (month !== '') {
    if (type === 'text') {
      return `${newMonth}, ${year}`;
    }
    return `${newMonth}-${year}`;
  }
  return year;
};

const handlePrintDate = (mounth, day, year, monthType, current) => {
  const date = new Date();
  const startDate = handleGetDate(mounth, monthType, day, year);

  if (current) {
    return (
      <>
        <YearComponentItem className="item-year-component">
          {date.getFullYear()}
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

const ContentYear = (props) => {
  const {
    startMonth, startDay, startYear, monthType, currentYear,
  } = props;

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
  currentYear: false,
};

ContentYear.propTypes = {
  startMonth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  monthType: PropTypes.oneOf(['text', 'number']),
  startDay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  startYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  currentYear: PropTypes.bool,
};

export default ContentYear;
