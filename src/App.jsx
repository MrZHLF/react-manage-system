import React, { Component, Fragment } from 'react'
import './App.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './views/login/Login'
import Index from './views/index/Index'

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact render={() => <Login />} path="/login" />
            <Route component={Index} path="/" />
          </Switch>
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default App
