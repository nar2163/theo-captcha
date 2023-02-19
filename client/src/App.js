import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './components/LoginPage'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
