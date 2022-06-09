// import logo from './logo.svg';
import './App.scss'
import React from 'react'
import routes from './router'
// import { renderRoutes } from 'react-router-config';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((r, i) => {
          return <Route exact={r.exact} path={r.path} key={i} render={() => {
            document.title = r.name || ''
            return <r.component></r.component>
          }}/>
        })}
      </Switch>
    </Router>
  )
}

export default App


