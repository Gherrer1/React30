import React from 'react';
import ReactDOM from 'react-dom';

const Slider = (props) => (
  <span>
    <label>{props.label}:</label>
    <input type="range" min={props.min} max={props.max} value={props.value} onChange={(e) => props.sliderChanged(e.target.value)}></input>
  </span>
);

export default Slider;
