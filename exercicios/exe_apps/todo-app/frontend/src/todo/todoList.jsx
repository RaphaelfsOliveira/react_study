import React from 'react';
import IconButton from '../template/iconButton';
import Grid from '../template/grid';

export default props => {

  const renderRows = () => {
    const list = props.list || [];

    return list.map(todo => (
      <div key={todo._id}>
          <Grid cols='12 6 6 6'>
            {todo.description}
          </Grid>
          <Grid cols='4 2 2 2'>
            <IconButton style='success' icon='check'
              onClick={() => props.handleMarkAsDone(todo)}>
            </IconButton>
          </Grid>
          <Grid cols='4 2 2 2'>
            <IconButton style='warning' icon='undo'
              onClick={() => props.handleMarkAsPending(todo)}>
            </IconButton>
          </Grid>
          <Grid cols='4 2 2 2'>
            <IconButton style='danger' icon='trash-o'
              onClick={() => props.handleRemove(todo)}>
            </IconButton>
          </Grid>
          <br/><br/><br/>
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
        <Grid cols='4 2 2 2'>
          <b>Feito</b>
        </Grid>
        <Grid cols='4 2 2 2'>
          <b>Pendente</b>
        </Grid>
        <Grid cols='4 2 2 2'>
          <b>Deletar</b>
        </Grid>
      </div>
      <br/><br/>
      <div className='row'>
        {renderRows()}
      </div>
    </div>
  )
}
