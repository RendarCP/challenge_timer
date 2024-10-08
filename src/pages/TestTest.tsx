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

import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

// const Header = ({ isOpen, toggleSidebar }) => (
//   <header className="bg-base-100 shadow-md">
//     <div className="navbar">
//       <div className="flex-none lg:hidden">
//         <label
//           htmlFor="my-drawer"
//           className="btn btn-square btn-ghost"
//           onClick={toggleSidebar}
//         >
//           {isOpen ? <X /> : <Menu />}
//         </label>
//       </div>
//       <div className="flex-1 lg:invisible">
//         <a className="btn btn-ghost normal-case text-xl">TimeFight</a>
//       </div>
//       <div className="flex-none gap-2">
//         {/* <div className="form-control">
//           <input
//             type="text"
//             placeholder="Search for a job"
//             className="input input-bordered w-24 md:w-auto"
//           />
//         </div> */}
//         {/* <button className="btn btn-ghost btn-circle">
//           <Search />
//         </button>
//         <button className="btn btn-ghost btn-circle">
//           <div className="indicator">
//             <Bell />
//             <span className="badge badge-xs badge-primary indicator-item"></span>
//           </div>
//         </button>
//         <button className="btn btn-ghost btn-circle">
//           <Settings />
//         </button> */}
//         <div className="avatar">
//           <div className="w-10 rounded-full">
//             <img
//               src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//               alt="User avatar"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   </header>
// );

export default function TestTest() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Stay on Top of Your Work 👋</h1>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <Calendar className="mr-2" /> Calendar
        </h2>
        <div className="bg-base-200 p-4 rounded-lg">Calendar Placeholder</div>
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
        <div className="bg-base-200 p-4 rounded-lg">Task List Placeholder</div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <CheckSquare className="mr-2" /> Today's Task
        </h2>
        <div className="bg-base-200 p-4 rounded-lg">Task List Placeholder</div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <CheckSquare className="mr-2" /> Today's Task
        </h2>
        <div className="bg-base-200 p-4 rounded-lg">Task List Placeholder</div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <CheckSquare className="mr-2" /> Today's Task
        </h2>
        <div className="bg-base-200 p-4 rounded-lg">Task List Placeholder</div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <CheckSquare className="mr-2" /> Today's Task
        </h2>
        <div className="bg-base-200 p-4 rounded-lg">Task List Placeholder</div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <CheckSquare className="mr-2" /> Today's Task
        </h2>
        <div className="bg-base-200 p-4 rounded-lg">Task List Placeholder</div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <CheckSquare className="mr-2" /> Today's Task
        </h2>
        <div className="bg-base-200 p-4 rounded-lg">Task List Placeholder</div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <CheckSquare className="mr-2" /> Today's Task
        </h2>
        <div className="bg-base-200 p-4 rounded-lg">Task List Placeholder</div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <CheckSquare className="mr-2" /> Today's Task
        </h2>
        <div className="bg-base-200 p-4 rounded-lg">Task List Placeholder</div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <CheckSquare className="mr-2" /> Today's Task
        </h2>
        <div className="bg-base-200 p-4 rounded-lg">Task List Placeholder</div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <CheckSquare className="mr-2" /> Today's Task
        </h2>
        <div className="bg-base-200 p-4 rounded-lg">Task List Placeholder</div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <CheckSquare className="mr-2" /> Today's Task
        </h2>
        <div className="bg-base-200 p-4 rounded-lg">Task List Placeholder</div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <CheckSquare className="mr-2" /> Today's Task
        </h2>
        <div className="bg-base-200 p-4 rounded-lg">Task List Placeholder</div>
      </div>
    </>
  );
}
