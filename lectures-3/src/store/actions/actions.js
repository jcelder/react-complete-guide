export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

const increment = () => {
  return {
    type: INCREMENT
  }
}

const decrement = () => {
  return {
    type: DECREMENT
  }
}

const add = (val) => {
  return {
    type: ADD,
    val
  }
}

const subtract = (val) => {
  return {
    type: SUBTRACT,
    val
  }
}

const storeResult = (result) => {
  return {
    type: STORE_RESULT,
    result
  }
}

const deleteResult = (id) => {
  return {
    type: DELETE_RESULT,
    resultElId: id
  }
}

export default {
  increment,
  decrement,
  add,
  subtract,
  storeResult,
  deleteResult
}