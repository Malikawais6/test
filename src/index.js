import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import allReducers from "./Reducers/index";
import { Provider } from "react-redux";

const store = createStore(allReducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
