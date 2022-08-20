import { combineReducers } from "redux";
import Reducer from '../Reducer/Reducer'
import ReducerTwo from '../Reducer/ReducerTwo'

let Root=combineReducers({
    Reducer:Reducer,
    ReducerTwo:ReducerTwo
})

export default Root