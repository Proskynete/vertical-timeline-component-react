import React from 'react';
import '../../assets/styles.scss';

const ContentBody = ({ title, children }) => (
    <div className="timeline__container__body">
        <p className="timeline__container__body__title">
            { title }
        </p>
        { children }
    </div>
);

export default ContentBody;