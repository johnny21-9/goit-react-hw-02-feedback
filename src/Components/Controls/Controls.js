import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ options, handleIncrement }) => (
  <ul className={styles.buttonList}>
    {options.map((item, index) => {
      return (
        <li key={index} onClick={() => handleIncrement(item.type)}>
          <button type="button" className={(styles.button, styles[item.color])}>
            {item.type}
          </button>
        </li>
      );
    })}
  </ul>
);

Controls.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape),
  handleIncrement: PropTypes.func,
};

export default Controls;
