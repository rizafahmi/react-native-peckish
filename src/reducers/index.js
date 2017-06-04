import { combineReducer } from 'redux'
import * as recipesReducer from './recipes'

export default combineReducer(Object.assign(recipesReducer))
