import React from 'react';

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

export default Controls;
