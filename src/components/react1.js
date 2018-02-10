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

      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);;
      audio.currentTime = 0;
      audio.play();
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

        <div id="sounds">
          <audio data-key="65" src="sounds/clap.wav"></audio>
          <audio data-key="83" src="sounds/hihat.wav"></audio>
          <audio data-key="68" src="sounds/kick.wav"></audio>
          <audio data-key="70" src="sounds/openhat.wav"></audio>
          <audio data-key="71" src="sounds/boom.wav"></audio>
          <audio data-key="72" src="sounds/ride.wav"></audio>
          <audio data-key="74" src="sounds/snare.wav"></audio>
          <audio data-key="75" src="sounds/tom.wav"></audio>
          <audio data-key="76" src="sounds/tink.wav"></audio>
        </div>
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
