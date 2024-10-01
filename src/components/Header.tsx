import { useUserStore } from '@/store/useUserStore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import { userLogout } from '@/api/auth';

import { useUserCheck } from '@/hooks/useUserCheck';

import Logo from '../assets/images/logo.png';
import LoginView from './auth/LoginView';
import Button from './core/Buttons';
import Spacer from './core/Spacer';
import { Text } from './core/Text';

const Header = () => {
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
    <div className="navbar bg-base-100">
      <label
        htmlFor="my-drawer"
        aria-label="open sidebar"
        className="btn btn-square btn-ghost"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-6 w-6 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
      <div className="flex-1">
        <div className="text-xl">
          <LogoBox onClick={() => navigate('/')}>
            <LogoImage src={Logo} />
            <Spacer right={10} />
            TimeFight
          </LogoBox>
        </div>
      </div>
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
            onClick={() => document.getElementById('login_modal').showModal()}
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
  );
};

export default Header;

const HeaderContainer = tw.header`
  flex
  justify-between
  items-center
  p-3
`;

const LogoBox = tw.div`
  flex
  items-center
  cursor-pointer
`;

const LogoImage = tw.img`
  h-12
`;

const RightWrapper = tw.nav`
  flex
  items-center
  gap-2
`;

const NavItem = tw.div`
  // flex-1
`;
