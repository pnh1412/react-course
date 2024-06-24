export const initializeState = {
  isLoading: false,
  theme: 'light'
};

export const appReducer = (state = initializeState, action) => {
  switch(action.type) {
    case 'SHOW_LOADING': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'SET_LOADING': {
      return {
        ...state,
        isLoading: action.payload
      }
    }
    default:
      return state
  }
}