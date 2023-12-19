import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import { getUserDoc } from './api/main';
import { auth } from './firebase';
import { useUserCheck } from './hooks/useUserCheck';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import Room from './pages/challenge/Room.page';
import Rooms from './pages/challenge/Rooms.page';
import HomePage from './pages/Home.page';
import Login from './pages/Login.page';
import MainPage from './pages/Main.page';
import SignUp from './pages/SignUp.page';
import Timer from './pages/Timer';
import TimerMainPage from './pages/timer/TimerMain.page';

function App() {
  useUserCheck();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<HomePage />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/main" element={<MainLayout showHeader />}>
          <Route path="" element={<MainPage />} />
          <Route path="timer" element={<Timer />} />
          <Route path="test" element={<TimerMainPage />} />
          <Route path="challenge/room" element={<Rooms />} />
          <Route path="challenge/room/:id" element={<Room />} />
          {/* timer/report */}
          {/* comunity */}
          {/* comunity/:type */}
          {/* shared */}
          {/* profile */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
