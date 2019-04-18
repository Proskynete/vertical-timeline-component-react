import React from 'react';
import '../../assets/styles.scss';

const TimelineContainer = ({ children }) => {
    return(<section className="timeline">
        <section className="timeline__container">
            { children }
        </section>
    </section>);
}

export default TimelineContainer;