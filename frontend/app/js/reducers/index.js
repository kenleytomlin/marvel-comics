import characters from './character'
import comics from './comic'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as reduxAsyncConnect } from 'redux-connect'
import { combineReducers } from 'redux'

export default combineReducers({
  characters,
  comics,
  routing,
  reduxAsyncConnect
})
