import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search, add, clear } from './todoActions'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  keyHandler(e) {
    const { add, search, clear, description } = this.props
    if (e.key === 'Enter') {
      e.shiftKey ? search() : add(description)
    } else if (e.key === 'Escape') {
      clear();
    }
  }

  componentWillMount() {
    this.props.search()
  }

  render() {
    const { add, search, clear, description } = this.props
    return (
      <div role='form' className='todoForm'>
        <Grid cols='9'>
          <input id='description' className='form-control'
            placeholder='Adicionar ou Pesquisar Tarefas'
            onChange={this.props.changeDescription}
            value={this.props.description}
            onKeyUp={this.keyHandler}>
          </input>
        </Grid>
        <Grid cols='3'>
          <IconButton style='primary' icon='plus'
            onClick={() => add(description)}>
          </IconButton>
          <IconButton style='info' icon='search'
            onClick={() => search()}></IconButton>
          <IconButton style='default' icon='close'
            onClick={() => clear()}></IconButton>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({
  changeDescription,
  search,
  add,
  clear,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
