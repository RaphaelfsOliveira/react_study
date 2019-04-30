import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
})

export const search = (description='') => {
  const searchDesc = description ? `&description__regex=/${description}/`: '';
  const request = axios.get(`${URL}?sort=-createdAt${searchDesc}`)
  return {
    type: 'TODO_SEARCHED',
    payload: request
  }
}

export const add = description => {
  return dispatch => {
    axios.post(URL, { description })
    .then(resp => dispatch(clear()))
  }
}

export const markAsDone = (todo, description) => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
    .then(resp => dispatch({ type: 'TODO_MARKED_AS_DONE', payload: resp.data }))
    .then(resp => dispatch(search(description)))
  }
}

export const markAsPending = (todo, description) => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
    .then(resp => dispatch({ type: 'TODO_MARKED_AS_PENDING', payload: resp.data }))
    .then(resp => dispatch(search(description)))
  }
}

export const remove = (todo, description) => {
  return dispatch => {
    axios.delete(`${URL}/${todo._id}`)
    .then(resp => dispatch({ type: 'TODO_REMOVED', payload: todo }))
    .then(resp => dispatch(search(description)))
  }
}

export const clear = () => {
  return [{ type: 'TODO_CLEAR' }, search()]
  }
