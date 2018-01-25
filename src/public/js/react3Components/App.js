import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider';
import Image from './Image';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      padding: 10,
      blur: 10
      // padding: '10px',
      // filter: 'blur(10px)',
      // background: '#ffc600'
    };

    this.updateSpacing = this.updateSpacing.bind(this);
    this.updateBlur = this.updateBlur.bind(this);
  }

  updateSpacing(value) {
    this.setState({
      padding: value
    });
  }

  updateBlur(value) {
    this.setState({
      blur: value
    });
  }

  render() {
    const style = {
      filter: `blur(${this.state.blur}px)`,
      padding: `${this.state.padding}px`,
      background: '#ffc600'
    };

    return (
      <div>
        <Slider label="Spacing" min="10" max="200" value={this.state.padding} onChange={this.updateSpacing} />
        <Slider label="Blur" min="0" max="25" value={this.state.blur} onChange={this.updateBlur} />
        <img src={this.props.imageSrc} style={style}/>
      </div>
    );
  }
}

export default App;
