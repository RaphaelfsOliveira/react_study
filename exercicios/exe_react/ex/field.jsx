import React, { Component } from 'react'
import { connect } from 'react-redux'

class Field extends Component {
  render() {
    return (
      <div>
        <h5>Teste component</h5>
        <input onChange={this.handleChange} value={this.props.value}></input><br />
        <label>{this.props.value}</label>
      </div>
    )
  }
}

const mapStateToProps = state => ({ value: state.field.value })

export default connect(mapStateToProps)(Field)
