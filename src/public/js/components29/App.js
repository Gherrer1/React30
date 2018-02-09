import React from 'react';
import TimerControls from './TimerControls';
import Display from './Display';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: null,
      meetBackTime: null
    };

    this.setSecondsLeft = this.setSecondsLeft.bind(this);
  }

  setSecondsLeft(secs) {
    // console.log(secs);
    this.setState({
      secondsLeft: secs,
      meetBackTime: App.getMeetBackTimeStr(secs)
    });
  }

  render() {
    return (
      <div className="timer">
        <TimerControls
          onTimerBtnClick={this.setSecondsLeft}
        />
        <Display secondsLeft={this.state.secondsLeft || ''} meetBackTime={this.state.meetBackTime || ''} />
      </div>
    );
  }
}

App.getMeetBackTimeStr = function getMeetBackTimeStr(secs) {
  const date = App.dateXSecsFromNow(secs);
  const hours = date.getHours().toString().padStart(2, '0');
  const mins = date.getMinutes().toString().padStart(2, '0');
  const s = date.getSeconds().toString().padStart(2, '0');
  return `${hours}:${mins}:${s}`;
};

App.dateXSecsFromNow = function dateXSecsFromNow(secs) {
  return new Date(new Date().getTime() + secs * 1000);
};

export default App;
