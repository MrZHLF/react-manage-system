import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import {AppRoutes} from './App';
import reportWebVitals from './reportWebVitals';


import Store from './store'
import { Provider } from 'react-redux'


ReactDOM.render(
  <Provider store={Store}>
    {/* <React.StrictMode > */}
      <AppRoutes/>
      {/* </React.StrictMode> */}
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();