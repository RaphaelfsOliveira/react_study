import React from 'react';
import ReactDOM from 'react-dom';
import Contador from './contador';
import Field from './field';


ReactDOM.render(
  <Contador label='Contator' initialValue={10} />
  , document.getElementById('app')
);

ReactDOM.render(
  <Field initialValue='escreva aqui' />
  , document.getElementById('app2')
);
