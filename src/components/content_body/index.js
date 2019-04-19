import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles.scss';

const ContentBody = (props) => {
  const {
    title,
    children,
  } = props;

  return (
    <div className="timeline__container__body">
      <p className="timeline__container__body__title">
        { title }
      </p>
      { children }
    </div>
  );
};

ContentBody.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};


export default ContentBody;
