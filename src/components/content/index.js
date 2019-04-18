import React from 'react';
import '../../assets/styles.scss';

const Content = ({ children }) => {
    return(<section className="timeline__container">
        { children }
    </section>);
}

export default Content;