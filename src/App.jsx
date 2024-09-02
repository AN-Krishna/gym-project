import React from 'react'
import MainPage from './components/MainPage';
import Auth from './components/Auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div>
 
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App