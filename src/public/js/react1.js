import React from 'react';
import ReactDOM from 'react-dom';

console.log('whats good');

function Key(props) {
  return (
    <div data-key={props.letter.charCodeAt(0)} className="key">
      <kbd>{props.letter}</kbd>
      <span className="sound">{props.sound}</span>
    </div>
  );
}

class App extends React.Component {
    render() {
      return (
        <div className="keys">{
          this.props.keys.map(keyObj => (
            <Key key={keyObj.letter} {...keyObj} />
          ))
        }</div>
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

ReactDOM.render(<App keys={keys} />, document.querySelector('.keys'));

/*
  - convert letter to ascii key
  1) what does data-key do?
  2) webpack - multiple entries and multiple outputs
  3) whats kbd
*/
