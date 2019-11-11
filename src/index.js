import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/pages/Login.js'
import Dashboard from './components/pages/Dashboard.js'
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/student/dashboard' component={() => <Dashboard userRole='student' />} />
        <Route path='/teacher/dashboard' component={() => <Dashboard userRole='teacher' />} />
        <Route path='/statistics' component={Dashboard} />
        <Redirect path='/*' to='/' />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
