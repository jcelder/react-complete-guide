import * as actionTypes from './actionTypes'

export const storeResult = (result) => {
  return {
    type: actionTypes.STORE_RESULT,
    result
  }
}
export const storeResultAsync = (result) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState().ctr.counter
      console.log('Old Counter:::', oldCounter)
      dispatch(storeResult(result))
    },2000)
  }
}

export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: id
  }
}