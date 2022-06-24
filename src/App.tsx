import React from 'react'
import {
  Link,
  Route,
  Routes,
} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Nested from './pages/Nested'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className="App-nav">
            <li>
              <Link
                className="App-nav__link"
                to="/"
              >Home</Link>
            </li>
            <li>
              <Link
                className="App-nav__link"
                to="/nested"
              >Nested</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          index
          element={ <Home /> }
        />
        <Route
          path="/nested"
          element={ <Nested /> }
        />
      </Routes>
    </div>
  )
}

export default App
