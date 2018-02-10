import React from 'react';

export default function TimerButton(props) {
  return (
    <button className="timer__button" onClick={e => props.setSecondsLeft(props.secs)}>{props.text}</button>
  );
}
