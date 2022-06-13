// import logo from './logo.svg';
import '@/App.scss'
import React, { useEffect, useState } from 'react'
import routes from '@/router'
import '@/until/rem'
// import { renderRoutes } from 'react-router-config';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

const App = () => {
  const [routeArr] = useState(routes)
  useEffect(() => {
    console.log('++++++++++++routes+++++++++++', routeArr)
  }, [routeArr])
  return (
    <Router>
      <Switch>
        {routeArr.map((r, i) => {
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


