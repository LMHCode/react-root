// import logo from './logo.svg';
import './App.scss'
import React from 'react'
import routes from "./router"
import { renderRoutes } from "react-router-config"

function App() {
  return (
    <div className="App">
      {renderRoutes(routes)}
    </div>
  );
}

export default App;
