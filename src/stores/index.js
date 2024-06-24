import { combineReducers, createStore } from "redux";

import { appReducer } from "../states/app.reducer";
import { userReducer } from "../states/user.reducer";

const rootReducers = combineReducers({
  app: appReducer,
  user: userReducer,
})

export const store = createStore(rootReducers)

/*
{
  app: {
    isLoading: false,
    theme: 'light'
  },
  user: {
    user: null,
    access_token: null
  }
}
*/

