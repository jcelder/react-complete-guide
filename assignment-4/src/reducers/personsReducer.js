import * as actionTypes from '../actions/actionTypes'

const initialState = {
  persons: []
}

const personsReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.payload.name,
        age: action.payload.age
      }
      return {
        ...state,
        persons: state.persons.concat(newPerson)
      }
    case actionTypes.DEL_PERSON:
      const newPersonsArray = state.persons.filter(person => person.id !== action.personID)
      return {
        ...state,
        persons: newPersonsArray
      }
    default:
      return state
  }
}

export default personsReducer