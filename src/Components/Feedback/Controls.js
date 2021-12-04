import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ options, handleIncrement }) => (
  <ul className="buttonList">
    {options.map((item, index) => {
      return (
        <li key={index}>
          <button type="button" onClick={() => handleIncrement(item)}>
            {item}
          </button>
        </li>
      );
    })}
  </ul>
);

Controls.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  handleIncrement: PropTypes.func,
};

export default Controls;
