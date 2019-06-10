import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const YearComponent = styled.div`
  color: #002a3a;
  font-size: 1em;
  font-weight: 400;
  padding-right: 15px;
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

const ContentYear = (props) => {
  const {
    year,
  } = props;

  return (
    <YearComponent className="year-component">
      <YearComponentItem className="item-year-component">
        { year }
      </YearComponentItem>
    </YearComponent>
  );
};

ContentYear.propTypes = {
  year: PropTypes.string.isRequired,
};

export default ContentYear;
