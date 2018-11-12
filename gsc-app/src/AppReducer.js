import {combineReducers} from 'redux'

import SearchGameReducer from "./componentes/Games/GamesFilterBarReducer";
import GamesList from "./componentes/Games/GamesListReducer";
import GameDetails from "./views/Game/GameDetailsReducer";
import Plataforma from "./views/Plataforma/PlataformaReducer";
import HomeReducer from "./views/Home/HomeReducer";

const AppReducer = combineReducers({home: HomeReducer, search: SearchGameReducer, games: GamesList, gameSelected: GameDetails, plataformaSelected: Plataforma})

export default AppReducer