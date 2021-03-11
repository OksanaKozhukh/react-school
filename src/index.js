import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import { ToastContainer } from "react-toastify";
import { applyMiddleware, compose, createStore } from "redux";

import App from "App";
import history from "utils/history";
import { rootSaga } from "rootSaga";
import { rootReducer } from "rootReducer";
import ModalsContainer from "containers/Modals";

import "./index.module.scss";

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
      <ModalsContainer />
      <ToastContainer />
    </Router>
  </Provider>,
  document.getElementById("root")
);
