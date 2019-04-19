import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles.scss';

const Content = (props) => {
  const { children } = props;

  return (
    <section className="timeline__container">
      { children }
    </section>
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
