import { useUserStore } from '@/store/useUserStore';
import { Menu, X } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { userLogout } from '@/api/auth';

import { useUserCheck } from '@/hooks/useUserCheck';

import LoginView from '../auth/LoginView';

interface IHeader {
  isOpen: boolean;
  toogleSidebar: () => void;
}

const Header = ({ isOpen, toggleSidebar }: IHeader) => {
  const { user, setUser, isLoading } = useUserCheck();
  const { logoutUser } = useUserStore();
  // const { user } = useUserStore();
  console.log('user', user?.uid, isLoading);
  const navigate = useNavigate();
  const handleLogout = async () => {
    // 먼저 상태를 초기화
    logoutUser();
    // 그 다음 로그아웃 API 호출
    await userLogout();
  };
  return (
    <header className="bg-base-100 shadow-md fixed top-0 right-0 w-full z-[999]">
      <div className="navbar">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer"
            className="btn btn-square btn-ghost"
            onClick={toggleSidebar}
          >
            {isOpen ? <X /> : <Menu />}
          </label>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">TimeFight</a>
        </div>
        <div className="flex-none gap-2">
          {/* <div className="form-control">
            <input
              type="text"
              placeholder="Search for a job"
              className="input input-bordered w-24 md:w-auto"
            />
          </div> */}
          {/* <button className="btn btn-ghost btn-circle">
            <Search />
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <Bell />
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <button className="btn btn-ghost btn-circle">
            <Settings />
          </button> */}
          {/* <div className="avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="User avatar"
              />
            </div>
          </div> */}
          <div className="flex-none gap-2">
            {isLoading ? (
              <div className="skeleton h-10 w-10 shrink-0 rounded-full"></div> // 로딩 중 표시
            ) : user?.uid ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="User Avatar"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li onClick={handleLogout}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            ) : (
              <button
                className="btn btn-primary"
                // onClick={() => navigate('/auth/login')}
                onClick={() =>
                  document.getElementById('login_modal').showModal()
                }
              >
                로그인
              </button>
            )}
            <dialog id="login_modal" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-center">로그인</h3>
                <LoginView />
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
