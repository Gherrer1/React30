import React from 'react';
import TimerControls from './TimerControls';
import Display from './Display';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sealBroken: false,
      secondsLeft: null,
      meetBackTime: null
    };

    this.setSecondsLeft = this.setSecondsLeft.bind(this);
  }

  setSecondsLeft(secs) {
    const _this = this;
    this.setState({
      sealBroken: true,
      secondsLeft: secs,
      meetBackTime: App.getMeetBackTimeStr(secs)
    }, () => {
      _this.interval = setInterval(() => _this.setState(prev => ({ secondsLeft: prev.secondsLeft - 1 }), () => {
        if(_this.state.secondsLeft === 0) {
          clearInterval(_this.interval);
          _this.interval = null;
        }
      }), 1000);
    });
  }

  render() {
    const displayProps = {
      sealBroken: this.state.sealBroken,
      secondsLeft: this.state.sealBroken ? this.state.secondsLeft : '',
      meetBackTime: this.state.sealBroken ? this.state.meetBackTime : ''
    };
    return (
      <div className="timer">
        <TimerControls
          onTimerBtnClick={this.setSecondsLeft}
        />
        <Display {...displayProps} />
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
