import { Menu, X } from 'lucide-react';
import React from 'react';

interface IHeader {
  isOpen: boolean;
  toogleSidebar: () => void;
}

const Header = ({ isOpen, toggleSidebar }: IHeader) => (
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
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="User avatar"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
