import { combineReducers } from 'redux'
import * as recipesReducer from './recipes'
console.log(recipesReducer)

export default combineReducers(Object.assign(recipesReducer))
