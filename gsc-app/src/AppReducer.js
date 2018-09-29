import {combineReducers} from 'redux'

import SearchGameReducer from "./componentes/Games/GamesFilterBarReducer";
import GamesList from "./componentes/Games/GamesListReducer";

const AppReducer = combineReducers({search: SearchGameReducer, games: GamesList})

export default AppReducer