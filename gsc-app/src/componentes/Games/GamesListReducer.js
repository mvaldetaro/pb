const INITIAL_STATE = {
  games: []
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_GAME":
      return {
        ...state,
        games: action.payload
      }
    default:
      return state
  }
}