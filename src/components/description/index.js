import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles.scss';

const Description = (props) => {
  const {
    text,
    optional,
  } = props;

  return (
    <div className="timeline__container__body__description">
      <span className="timeline__container__body__description__text">{ text }</span>
      { optional
        ? <span className="timeline__container__body__description__optional">{ optional }</span>
        : ''
      }
    </div>
  );
};

Description.propTypes = {
  text: PropTypes.string.isRequired,
  optional: PropTypes.string,
};

Description.defaultProps = {
  optional: '',
};


export default Description;
