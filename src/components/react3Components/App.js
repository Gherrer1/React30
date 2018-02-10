import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider';
import Image from './Image';
import ColorPicker from './ColorPicker';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      padding: 10,
      blur: 10,
      color: '#ffc600'
    };

    this.updateSpacing = this.updateSpacing.bind(this);
    this.updateBlur = this.updateBlur.bind(this);
    this.updateColor = this.updateColor.bind(this);
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

  updateColor(value) {
    this.setState({
      color: value
    });
  }

  render() {
    const style = {
      filter: `blur(${this.state.blur}px)`,
      padding: `${this.state.padding}px`,
      background: this.state.color
    };

    return (
      <div>
        <h2>Update CSS Variables with <span style={{ color: this.state.color}} >JS</span></h2>
        <Slider label="Spacing" min="10" max="200" value={this.state.padding} onChange={this.updateSpacing} />
        <Slider label="Blur" min="0" max="25" value={this.state.blur} onChange={this.updateBlur} />
        <ColorPicker label="Base Color" value={this.state.color} onChange={this.updateColor}/>
        <img src={this.props.imageSrc} style={style}/>
      </div>
    );
  }
}

export default App;
