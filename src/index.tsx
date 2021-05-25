import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { AddBook, JwtToken } from "./store/Reducer";
import { createStore } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    addBook: AddBook,
    JwtToken: JwtToken,
  }),
  applyMiddleware(thunk)
);
// const history = createBrowserHistory();

// ЗАПИТАТИ про історію.

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
