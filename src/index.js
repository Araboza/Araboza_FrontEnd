import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reducer from "./modules";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./lib/saga";
import createSagaMiddleware from "redux-saga";
import { setPost } from "./modules/posts";
import { getUser } from "./modules/user";

import dotenv from "dotenv";
import { set_user } from "./modules/myInfo";
dotenv.config();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

store.dispatch(getUser());

if (store.getState().user.cookie) {
  store.dispatch(setPost());
  store.dispatch(set_user());
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
