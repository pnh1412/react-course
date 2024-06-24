export const initializeState = {
  user: null,
  access_token: null
};

export const userReducer = (state = initializeState, action) => {
  switch(action.type) {
    case 'SET_USER': {
      return {
        ...state,
        user: action.payload
      }
    }
    default:
      return state
  }
}