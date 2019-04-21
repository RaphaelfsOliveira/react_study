import React, { Component } from 'react';

export default class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {value: props.initialValue}
  }

  sum(delta) {
    this.setState({value: this.state.value + delta})
  }

  render() {
    return (
      <div>
        <h5>{this.props.label}</h5>
        <h4>{this.state.value}</h4>
        <button onClick={() => this.sum(-1)}>Dec</button>
        <button onClick={() => this.sum(1)}>Inc</button>
      </div>
    )
  }
}
