import { combineReducers } from 'redux'

import submitedMileAndLitres from './submitMilesAndLitres'

export default combineReducers({
  currentMilesAndLiters: submitedMileAndLitres
})
