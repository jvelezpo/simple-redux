import { combineReducers } from 'redux'

import mathReducer from './math-reducer'

const rootReducer = combineReducers({
  math: mathReducer
})

export default rootReducer
