import loginReducer from './loginReducer'
import todoReducer from './todoReducer'
import { combineReducers } from 'redux'
import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
    loginReducer,
    todoReducer,
    newsReducer
})
export default rootReducer
