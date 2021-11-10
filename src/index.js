import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./components/App";
import configureStore from "./redux/configureStore";
import { Provider } from "react-redux"; // provide redux store data to react components

const store = configureStore(); // we can pass initial state here e.g. from server or local storage
render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
