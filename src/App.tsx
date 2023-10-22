import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import Login from './pages/Login.page';
import SignUp from './pages/SignUp.page';
import Timer from './pages/Timer';
import MainPage from './pages/Main.page';
import AuthLayout from './layouts/AuthLayout';
import Rooms from './pages/challenge/Rooms.page';
import Room from './pages/challenge/Room.page';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<MainPage />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/main" element={<MainLayout showHeader />}>
          <Route path="timer" element={<Timer />} />
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
