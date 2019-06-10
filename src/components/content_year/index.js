import React from 'react';
import PropTypes from 'prop-types';

const ContentYear = (props) => {
  const { year } = props;

  return (
    <div className="timeline__container__year">
      <div className="timeline__container__year__item">
        { year }
      </div>
    </div>
  );
};

ContentYear.propTypes = {
  year: PropTypes.string.isRequired,
};

export default ContentYear;
