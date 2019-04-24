import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  todo: () => ({
    description: 'Ler livro',
    list: [{
      _id: 1,
      description: 'Pagar fatura do cartao',
      done: true
    }, {
      _id: 2,
      description: 'Reuniao com a equipe as 10',
      done: false
    }, {
      _id: 3,
      description: 'Consulta medica na terça',
      done: false
    }]
  })
})

export default rootReducer
