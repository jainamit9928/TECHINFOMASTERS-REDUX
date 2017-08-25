import { combineReducers } from 'redux'
import {techies, details, search} from './reducer'

const techinfomasterReducer = combineReducers({
  techies,
  details,
  search,
})

export default techinfomasterReducer;
