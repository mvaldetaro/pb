import {combineReducers} from 'redux'

import HomeReducer from "./views/Home/HomeReducer";

const AppReducer = combineReducers({home: HomeReducer})

export default AppReducer