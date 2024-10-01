import {
  BarChart2,
  Bell,
  Calendar,
  CheckSquare,
  Clock,
  Menu,
  Search,
  Settings,
  X,
} from 'lucide-react';
import React, { useState } from 'react';

const Header = ({ isOpen, toggleSidebar }) => (
  <header className="bg-base-100 shadow-md">
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
        <a className="btn btn-ghost normal-case text-xl">HexaTask</a>
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
            <img src="/api/placeholder/40/40" alt="User avatar" />
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div className={`drawer-side ${isOpen ? 'lg:drawer-open' : ''}`}>
    <label
      htmlFor="my-drawer"
      className="drawer-overlay"
      onClick={toggleSidebar}
    ></label>
    <ul className="menu p-4 w-60 h-full bg-base-200 text-base-content">
      <li>
        <a className="active">Home</a>
      </li>
      <li>
        <a>Projects</a>
      </li>
      <li>
        <a>Meetings</a>
      </li>
      <li>
        <a>Team</a>
      </li>
      <li>
        <a>Schedule</a>
      </li>
      <li>
        <a>Analytics</a>
      </li>
      <li>
        <a>Calendar</a>
      </li>
      <li className="mt-auto">
        <a className="text-red-500">Logout</a>
      </li>
    </ul>
  </div>
);

export default function TestTest() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="drawer lg:drawer-open">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isSidebarOpen}
        readOnly
      />
      <div className="drawer-content flex flex-col h-screen">
        <Header isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4 lg:ml-60">
          <h1 className="text-2xl font-bold mb-4">
            Stay on Top of Your Work 👋
          </h1>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <Calendar className="mr-2" /> Calendar
            </h2>
            <div className="bg-base-200 p-4 rounded-lg">
              Calendar Placeholder
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <Clock className="mr-2" /> Time Tracker
            </h2>
            <div className="bg-gray-800 text-white p-4 rounded-lg inline-block">
              <span className="text-2xl font-bold">08:40:10</span>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <BarChart2 className="mr-2" /> Activity
            </h2>
            <div className="bg-base-200 p-4 rounded-lg">
              Activity Chart Placeholder
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <CheckSquare className="mr-2" /> Today's Task
            </h2>
            <div className="bg-base-200 p-4 rounded-lg">
              Task List Placeholder
            </div>
          </div>
        </main>
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}
