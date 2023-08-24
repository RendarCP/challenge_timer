import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import Login from './pages/Login.page';
import SignUp from './pages/SignUp.page';
// import { getRoom, getRoomPersons } from './api/main';
import Timer from './pages/Timer';
import MainPage from './pages/Main.page';
import AuthLayout from './layouts/AuthLayout';
import Rooms from './pages/challenge/Rooms.page';
import Room from './pages/challenge/Room.page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/timer" element={<Timer />} />
        <Route path="/challenge/room" element={<Rooms />} />
        <Route path="/challenge/room/:id" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
