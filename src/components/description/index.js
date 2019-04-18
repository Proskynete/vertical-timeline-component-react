import React from 'react';
import '../../assets/styles.scss';

const Description = ({ text }) => (
    <p className="timeline__container__body__description">
        { text }
    </p>
);

export default Description;