import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { getRoom, getRoomPersons } from './api/main';

function App() {
  useEffect(() => {
    getRoom('02OYhBlNkTHezBAoq0i4')
      .then(res => {
        console.log('res', res);
      })
      .catch(err => {
        console.log('err', err);
      });
    getRoomPersons('02OYhBlNkTHezBAoq0i4')
      .then(res => {
        console.log('res person', res);
      })
      .catch(err => {
        console.log('err', err);
      });
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
