import {combineReducers} from 'redux'

import SearchGameReducer from "./componentes/Games/GamesFilterBarReducer";
import GamesList from "./componentes/Games/GamesListReducer";
import GameDetails from "./views/Game/GameDetailsReducer";
import Plataforma from "./views/Plataforma/PlataformaReducer";

const AppReducer = combineReducers({search: SearchGameReducer, games: GamesList, gameSelected: GameDetails, plataformaSelected: Plataforma})

export default AppReducer