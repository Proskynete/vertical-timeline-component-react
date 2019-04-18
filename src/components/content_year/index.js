import React from 'react';
import '../../assets/styles.scss';

const ContentYear = ({ year }) => (
    <div className="timeline__container__year">
        <div className="timeline__container__year__item">
            { year }
        </div>
    </div>
);

export default ContentYear;