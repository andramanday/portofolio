import {combineReducers} from 'redux'
import about from './aboutReducer'
import personal from './personalReducer'
import experience from './experienceReducer'
import project from './projectReducer'

export default combineReducers({
  about,
  personal,
  experience,
  project
})