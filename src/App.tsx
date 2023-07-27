import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import Login from './pages/Login';
import SignUp from './pages/SignUp';
// import { getRoom, getRoomPersons } from './api/main';
import Timer from './pages/Timer';
import TestPage from './pages/Test.page';
import MainPage from './pages/Main.page';
import AuthLayout from './layouts/AuthLayout';

function App() {
  // useEffect(() => {
  //   getRoom('02OYhBlNkTHezBAoq0i4')
  //     .then(res => {
  //       console.log('res', res);
  //     })
  //     .catch(err => {
  //       console.log('err', err);
  //     });
  //   getRoomPersons('02OYhBlNkTHezBAoq0i4')
  //     .then(res => {
  //       console.log('res person', res);
  //     })
  //     .catch(err => {
  //       console.log('err', err);
  //     });
  // }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
