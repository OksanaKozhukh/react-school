import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, createStore } from "redux";

import App from "App";
import { rootSaga } from "rootSaga";
import { rootReducer } from "rootReducer";
import ModalsContainer from "containers/Modals";

import "./index.scss";

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ModalsContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
