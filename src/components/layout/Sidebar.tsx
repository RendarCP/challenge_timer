import React from 'react';

interface ISidebar {
  isOpen: boolean;
  toogleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: ISidebar) => (
  <div className={`drawer-side ${isOpen ? 'lg:drawer-open' : ''}`}>
    <label
      htmlFor="my-drawer"
      className="drawer-overlay"
      onClick={toggleSidebar}
    ></label>
    <ul className="menu p-0 w-60 h-full bg-base-200 text-base-content">
      <div className="bg-base-100 p-2 fixed w-60 z-auto">
        {/* <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl"></a>
        </div> */}
      </div>
      <div className="p-4 mt-16">
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
      </div>
    </ul>
  </div>
);

export default Sidebar;
