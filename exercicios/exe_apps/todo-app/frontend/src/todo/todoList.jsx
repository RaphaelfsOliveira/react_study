import React from 'react';
import { connect } from 'react-redux'

import IconButton from '../template/iconButton';
import Grid from '../template/grid';

const TodoList = props => {

  const renderRows = () => {
    const list = props.list || [];

    return list.map(todo => (
      <div key={todo._id} className='todoListDivider'>
          <Grid cols='12 6 6 6'>
            <label className={todo.done ? 'markedAsDone': ''}>
              {todo.description}
            </label>
          </Grid>
          <Grid cols='12 6 6 6'>
            <IconButton style='success' icon='check' hide={todo.done}
              onClick={() => props.handleMarkAsDone(todo)}>
            </IconButton>
            <IconButton style='warning' icon='undo' hide={!todo.done}
              onClick={() => props.handleMarkAsPending(todo)}>
            </IconButton>
            <IconButton style='danger' icon='trash-o' hide={!todo.done}
              onClick={() => props.handleRemove(todo)}>
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

const mapStateToProps = state => ({list: state.todo.list})

export default connect(mapStateToProps)(TodoList)
