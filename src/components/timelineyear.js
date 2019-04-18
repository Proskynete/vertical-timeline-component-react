import React from 'react';
import styles from './styles';

const TimelineYear = ({ year }) => (
    <div style={styles.year}>
        <div style={styles.item}>
            { year }
        </div>
    </div>
);

export default TimelineYear;