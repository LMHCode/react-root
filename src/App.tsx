// import logo from './logo.svg';
import '@/App.scss'
import React, { useEffect, useState } from 'react'
import routes from '@/router'
// import '@/until/rem'
// import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  const [routeArr] = useState(routes)
  useEffect(() => {
    console.log('++++++++++++routes+++++++++++', routeArr)
  }, [routeArr])
  return (
    <Router>
      <Routes>
        {routeArr.map((r, i) => {
            return <Route path={r.path} key={i} element={r.elment}/>
        })}
      </Routes>
      
    </Router>
  )
}

export default App


