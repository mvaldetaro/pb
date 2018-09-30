import {combineReducers} from 'redux'

import SearchGameReducer from "./componentes/Games/GamesFilterBarReducer";
import GamesList from "./componentes/Games/GamesListReducer";
import GameDetails from "./views/Game/GameDetailsReducer";

const AppReducer = combineReducers({search: SearchGameReducer, games: GamesList, gameSelected: GameDetails})

export default AppReducer