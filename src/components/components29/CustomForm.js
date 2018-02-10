import React from 'react';

class CustomForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      typed: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onTyped = this.onTyped.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const typed = this.state.typed;
    this.setState({ typed: '' });
    this.props.handleSubmit(typed);
  }

  onTyped(e) {
    this.setState({ typed: e.target.value });
  }

  render() {
    return (
      <form name="customForm" id="custom" onSubmit={this.onSubmit}>
        <input
          type="text"
          name="minutes"
          placeholder="Enter Minutes"
          value={this.state.typed}
          onChange={this.onTyped}
        ></input>
      </form>
    );
  }
}

export default CustomForm;
