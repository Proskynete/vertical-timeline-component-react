import React from 'react';
import '../../assets/styles.scss';

const ContentBody = ({ title }) => (
    <div className="timeline__container__body">
        <p className="timeline__container__body__title">
            { title }
        </p>
    </div>
);

export default ContentBody;