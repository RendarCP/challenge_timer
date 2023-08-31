import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import Home from './pages/Home.page';
import Login from './pages/Login.page';
import SignUp from './pages/SignUp.page';
import Timers from './pages/timer/Timers.page';
import Timer from './pages/timer/Timer.page';
import Result from './pages/result/Result.page';
import MainPage from './pages/Main.page';
import AuthLayout from './layouts/AuthLayout';
import Rooms from './pages/challenge/Rooms.page';
import Room from './pages/challenge/Room.page';
import MainLayout from './layouts/MainLayout';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="main" element={<MainPage />} />
            {/* 타이머 관련 */}
            <Route path="timer" element={<Timers />} />
            <Route path="timer/:id" element={<Timer />} />
            {/* 결과 화면 */}
            <Route path="result/:id" element={<Result />} />
            {/* 챌린지 관련 */}
            <Route path="challenge/room" element={<Rooms />} />
            <Route path="challenge/room/:id" element={<Room />} />
            {/* 커뮤니티 관련 */}
            {/* 분석 관련 */}
            {/* timer/report */}
            {/* comunity */}
            {/* comunity/:type */}
            {/* shared */}
            {/* profile */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
