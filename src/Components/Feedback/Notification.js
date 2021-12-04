import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => <span>{message}</span>;

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
