import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { firestore } from './firebase';

function App() {
  useEffect(() => {
    console.log('firestore', firestore);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
