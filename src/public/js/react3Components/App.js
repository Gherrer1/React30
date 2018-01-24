import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider';
import Image from './Image';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      padding: '10px',
      filter: 'blur(10px)',
      background: '#ffc600'
    };
  }

  render() {
    return (
      <div>
        <Slider label="Spacing" min="10" max="200" defaultValue="10" />
        <Slider label="Blur" min="0" max="25" defaultValue="10" />
        <img src={this.props.imageSrc} style={this.state}/>
      </div>
    );
  }
}

export default App;
