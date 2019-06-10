import React from 'react';
import PropTypes from 'prop-types';

const Timeline = (props) => {
  const { children } = props;

  return (
    <section className="timeline">
      { children }
    </section>
  );
};

Timeline.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Timeline;
