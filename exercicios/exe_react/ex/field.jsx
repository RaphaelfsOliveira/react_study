import React, { Component } from 'react';

class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {value: props.initialValue};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <h5>Teste component</h5>
        <input onChange={this.handleChange} value={this.state.value}></input><br />
        <label>{this.state.value}</label>
      </div>
    )
  }
}

export default Field;
