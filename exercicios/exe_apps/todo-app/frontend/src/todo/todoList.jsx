import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import Grid from '../template/grid'
import { markAsDone, markAsPending, remove } from './todoActions'

const TodoList = props => {

  const renderRows = () => {
    const list = props.list || []

    return list.map(todo => (
      <div key={todo._id} className='todoListDivider'>
          <Grid cols='12 6 6 6'>
            <label className={todo.done ? 'markedAsDone': ''}>
              {todo.description}
            </label>
          </Grid>
          <Grid cols='12 6 6 6'>
            <IconButton style='success' icon='check' hide={todo.done}
              onClick={() => props.markAsDone(todo, props.description)}>
            </IconButton>
            <IconButton style='warning' icon='undo' hide={!todo.done}
              onClick={() => props.markAsPending(todo, props.description)}>
            </IconButton>
            <IconButton style='danger' icon='trash-o' hide={!todo.done}
              onClick={() => props.remove(todo, props.description)}>
            </IconButton>
          </Grid>
          <br/><br/>
      </div>
    ))
  }

  return (
    <div>
      <br/><br/><br/>
      <div className='row'>
        <Grid cols='12 6 6 6'>
          <b>Descrição</b>
        </Grid>
        <Grid cols='12 6 6 6'>
          <b>Ações</b>
        </Grid>
      </div>
      <br/><br/>
      <div className='row'>
        {renderRows()}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  description: state.todo.description,
  list: state.todo.list
})

const mapDispatchToProps = dispatch => bindActionCreators({
  markAsDone,
  markAsPending,
  remove,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
