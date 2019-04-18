import React from 'react';
import styles from './styles';

const TimelineContainer = ({ children }) => {
    return(<section style={styles.timeline}>
        <section style={styles.container}>
            { children }
        </section>
    </section>);
}

export default TimelineContainer;