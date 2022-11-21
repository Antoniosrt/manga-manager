import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import ModalComponent from './components/ModalComponent/ModalComponent';
import CardComponent from './components/CardComponent/CardComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modal" element={<ModalComponent setShowModal={() => { return false }} />} />
        <Route path="/card" element={<CardComponent />} />
      </Routes>
    </Router>
  )
}

export default App
