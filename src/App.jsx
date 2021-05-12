import React, { Component,Fragment } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './views/login/Login'
class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact render={()=> <Login/>} path="/login" />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
