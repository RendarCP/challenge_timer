import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import { getUserDoc } from './api/main';
import { auth } from './firebase';
import { useUserCheck } from './hooks/useUserCheck';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/Home.page';
import Login from './pages/Login.page';
import MainPage from './pages/Main.page';
import SignUp from './pages/SignUp.page';
import TestPage from './pages/Test.page';
import Timer from './pages/Timer';
import Room from './pages/challenge/Room.page';
import Rooms from './pages/challenge/Rooms.page';
import Single from './pages/single/Single';
import SingleStopWatch from './pages/single/SingleStopWatch';
import SingleTimer from './pages/single/SingleTimer';
import TimerMainPage from './pages/timer/TimerMain.page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout showHeader />}>
          <Route path="" element={<HomePage />} />
          <Route path="test" element={<TestPage />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/main" element={<MainLayout showHeader />}>
          <Route path="" element={<MainPage />} />
          <Route path="timer" element={<Timer />} />
          <Route path="test" element={<TimerMainPage />} />
          {/* timer/single */}
          <Route path="timer/single" element={<Single />} />
          <Route path="timer/single/timer" element={<SingleTimer />} />
          <Route path="timer/single/stopwatch" element={<SingleStopWatch />} />
          {/* timer/single/:id */}
          <Route path="timer/single/:id" element={<SingleTimer />} />
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
