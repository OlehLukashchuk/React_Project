import { combineReducers, applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";

import { AddBook, JwtToken } from "./Reducer";

const store = createStore(
  combineReducers({
    addBook: AddBook,
    JwtToken: JwtToken,
  }),
  applyMiddleware(thunk)
);

export default store;
