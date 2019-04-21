import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './fieldActions'

class Field extends Component {
  render() {
    return (
      <div>
        <h5>Teste component</h5>
        <input onChange={this.props.changeValue} value={this.props.value}></input><br />
        <label>{this.props.value}</label>
      </div>
    )
  }
}

const mapStateToProps = state => ({ value: state.field.value })

const mapDispatchToProps = dispatch => bindActionCreators({ changeValue }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Field)
