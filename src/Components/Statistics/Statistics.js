import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={styles.list}>
    <li>
      <span className={styles.title}>Good:</span>
      <span className={styles.value}>{good}</span>
    </li>
    <li>
      <span className={styles.title}>Neutral:</span>
      <span className={styles.value}>{neutral}</span>
    </li>
    <li>
      <span className={styles.title}>Bad:</span>
      <span className={styles.value}>{bad}</span>
    </li>
    <li>
      <span className={styles.title}>Total:</span>
      <span className={styles.value}>{total}</span>
    </li>
    <li>
      <span className={styles.title}>Positive Feedback:</span>
      <span className={styles.value}>{positivePercentage}%</span>
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
