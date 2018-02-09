import React from 'react';

function Display(props) {
  return (
    <div className="display">
      <h1 className="display__time-left">
        {props.secondsLeft ? Display.convertSecsToCountdownStr(props.secondsLeft) : ''}
      </h1>
      <p className="display__end-time">{props.meetBackTime ? `Meet back at ${props.meetBackTime}` : ''}</p>
    </div>
  );
}

Display.convertSecsToCountdownStr = function convertSecsToCountdownStr(secs) {
  const minutes = Math.floor(secs / 60);
  const seconds = `${secs % 60}`.padStart(2, '0');
  return `${minutes}:${seconds}`;
};

export default Display;
