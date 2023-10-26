import '@/App.scss'
import React, { useState } from 'react'
import routes from '@/router'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  const [routeArr] = useState(routes)
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


