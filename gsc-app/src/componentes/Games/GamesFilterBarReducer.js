const INITIAL_STATE = {
  searchString: ''
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SEARCH_GAME":
      return {
        ...state,
        searchString: action.payload
      }
    default:
      return state
  }
}