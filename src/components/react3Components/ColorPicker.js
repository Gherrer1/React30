import React from 'react';
import ReactDOM from 'react-dom';

const ColorPicker = (props) => (
  <span>
    <label>{props.label}:</label>
    <input type="color" value={props.value} onChange={e => props.onChange(e.target.value)}></input>
  </span>
);

export default ColorPicker;
