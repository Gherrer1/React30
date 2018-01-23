import React from 'react';
import ReactDOM from 'react-dom';

function Key(props) {
  return (
    <div
      data-key={props.letter.charCodeAt(0)}
      className={`key ${props.playing ? 'playing' : ''}`}
      onTransitionEnd={() => props.transitionFinished(props.letter)}>
      <kbd>{props.letter}</kbd>
      <span className="sound">{props.sound}</span>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.animationFinished = this.animationFinished.bind(this);

    window.addEventListener('keydown', (e) => {
      this.setState({
        [e.key.toUpperCase()]: true
      });
    });
  }

  animationFinished(letter) {
    this.setState({
      [letter]: false
    });
  }

  render() {
    return (
      <div>
        <div className="keys">{
          this.props.keys.map(keyObj => (
            <Key key={keyObj.letter} {...keyObj} playing={this.state[keyObj.letter]} transitionFinished={this.animationFinished} />
          ))
        }</div>
      </div>
    );
  }
}

let keys = [
  { letter: 'a'.toUpperCase(), sound: 'clap' },
  { letter: 's'.toUpperCase(), sound: 'hihat' },
  { letter: 'd'.toUpperCase(), sound: 'kick' },
  { letter: 'f'.toUpperCase(), sound: 'openhat' },
  { letter: 'g'.toUpperCase(), sound: 'boom' },
  { letter: 'h'.toUpperCase(), sound: 'ride' },
  { letter: 'j'.toUpperCase(), sound: 'snare' },
  { letter: 'k'.toUpperCase(), sound: 'tom' },
  { letter: 'l'.toUpperCase(), sound: 'tink' }
];

ReactDOM.render(<App keys={keys} />, document.querySelector('#app'));

/*
  - convert letter to ascii key
  1) what does data-key do?
  2) webpack - multiple entries and multiple outputs
  3) whats kbd
*/

/*
<div id="sounds">{
  this.props.keys.map(keyObj => (
    <audio
      key={keyObj.letter}
      autoPlay={true}
      onEnded={() => console.log('ended looool')}
      data-key={keyObj.letter.charCodeAt(0)}
      src={`sounds/${keyObj.sound}.wav`}></audio>
  ))
}</div>
*/
