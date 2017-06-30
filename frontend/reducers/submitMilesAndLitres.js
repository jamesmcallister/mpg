import { UPDATEDMILES, UPDATEDLITRES } from '../actions/Actions.js'

function submitedMileAndLitres(state = { miles: null, litres: null }, action) {
  switch (action.type) {
    case UPDATEDMILES:
      return Object.assign({}, state, { miles: action.miles })
    case UPDATEDLITRES:
      return Object.assign({}, state, { litres: action.litres })
    default:
      return state
  }
}

export default submitedMileAndLitres
