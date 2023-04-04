import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { userReducer } from "./Redux/Reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({ userlist: userReducer });

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
