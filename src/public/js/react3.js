import React from 'react';
import ReactDOM from 'react-dom';
import App from './react3Components/App';

// class Input extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: props.value
//     };
//   }
//
//   render() {
//     return (
//       <div className="inputGroup">
//         <label htmlFor={this.props.label.toLowerCase()}>{this.props.label}:</label>
//         <input type={this.props.type} value={this.props.value} {...this.props.config} onChange={this.props.onChange} ></input>
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <App imageSrc="/images/photo-1465188162913-8fb5709d6d57.jpg"/>,
  document.getElementById('app')
);
