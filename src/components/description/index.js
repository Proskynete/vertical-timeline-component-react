import React from 'react';
import '../../assets/styles.scss';

const Description = ({ text, optional }) => (
    <div className="timeline__container__body__description">
        <span className="timeline__container__body__description__text">{ text }</span>
        { optional ? 
            <span className="timeline__container__body__description__optional">{ optional }</span>
            : ""
        }
    </div>
);

export default Description;