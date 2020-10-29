import {combineReducers} from 'redux'
import urls from './urls'

let rootReducer = combineReducers({
urls: urls,
})

export default rootReducer