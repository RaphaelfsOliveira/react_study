import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default props => (
  <div role='form' className='todoForm'>

    <Grid cols='10 10 10 10'>
      <input id='description' className='form-control'
        placeholder='Adicione uma tarefa'>
      </input>
    </Grid>

    <Grid cols='2 2 2 2'>
      <IconButton style='primary' icon='plus'></IconButton>
    </Grid>
  </div>

);
