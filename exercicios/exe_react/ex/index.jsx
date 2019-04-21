import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import Contador from './contador'
import Field from './field'
import fieldReducer from './fieldReducer'

const reducers = combineReducers({
  field: fieldReducer
})

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Field initialValue='escreva aqui' />
  </Provider>
  , document.getElementById('app')
)

ReactDOM.render(
  <Contador label='Contator' initialValue={10} />
  , document.getElementById('app2')
)
