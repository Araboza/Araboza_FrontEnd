import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reducer from "./modules";
import { getPost } from "./modules/posts";
import { Provider } from "react-redux";
import { createStore } from "redux";
import data from "./dummy.json";

const store = createStore(reducer);

store.dispatch(getPost(data));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
