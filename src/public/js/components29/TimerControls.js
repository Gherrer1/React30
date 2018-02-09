import React from 'react';
import TimerButton from './TimerButton';
import CustomForm from './CustomForm';

const staticButtonData = [
  { secs: 20, text: '20 Secs' },
  { secs: 300, text: 'Work 5' },
  { secs: 900, text: 'Quick 15' },
  { secs: 1200, text: 'Snack 20' },
  { secs: 3600, text: 'Lunch Break' }
]

export default function TimerControls(props) {
  return (
    <div className="timer__controls">
      {staticButtonData.map(({ text, secs }) => (
        <TimerButton
          key={secs}
          text={text}
          secs={secs}
          setSecondsLeft={props.onTimerBtnClick}
        />
      ))}
      <CustomForm />
    </div>
  );
}
