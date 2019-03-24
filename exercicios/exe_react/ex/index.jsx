import React from 'react';
import ReactDOM from 'react-dom';
import ContadorComponent from './contador';


ReactDOM.render(
  <ContadorComponent label='Contator' initialValue={10} />
  , document.getElementById('app')
);

ReactDOM.render(
  <ContadorComponent label='Contator2' initialValue={1000} />
  , document.getElementById('app2')
);
