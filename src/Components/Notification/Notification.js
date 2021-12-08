import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ message }) => (
  <span className={styles.notification}>{message}</span>
);

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
