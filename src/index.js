import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from "./Root";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import store from "./Redux/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter basename={'/'}>
            <Root />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>
);

