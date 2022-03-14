import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import App from "./components/app/App";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import store from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
