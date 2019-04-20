import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import Contador from './contador'
import Field from './field'

const reducers = combineReducers({
  field: () => ({ value: 'opa' })
})

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Contador label='Contator' initialValue={10} />
  </Provider>
  , document.getElementById('app')
);

ReactDOM.render(
  <Field initialValue='escreva aqui' />
  , document.getElementById('app2')
);
