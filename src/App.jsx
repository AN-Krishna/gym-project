import React from 'react'
import MainPage from './components/MainPage';
import Auth from './components/Auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <div>
 
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<Auth />} />

      </Routes>
    </Router>
    </div>
  )
}

export default App