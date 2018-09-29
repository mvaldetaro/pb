const INITIAL_STATE = {
  hasIntro: false
};

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'START_CHANGED':
      return {
        ...state,
        hasIntro: false
      }
    default:
      return state
  }
}