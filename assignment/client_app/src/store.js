import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { combineReducers } from "redux";

import { userSlice } from "./services/userSlice";

import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  user: userSlice?.reducer,
});

const middlewareEnhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
);

export const store = createStore(rootReducer, undefined, middlewareEnhancer);
