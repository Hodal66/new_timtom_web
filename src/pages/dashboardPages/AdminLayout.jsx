/* eslint-disable react/prop-types */

import { FaBell, FaHome, FaList, FaEnvelope } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white flex-shrink-0">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
        <nav className="mt-4 bg-gray h-screen">
          <NavLink
            to="/admin/overview"
            className="block px-4 py-2 text-blue hover:bg-textWhite"
            activeClassName="bg-blue"
          >
            <FaHome className="inline-block mr-2" /> Overview
          </NavLink>
          <NavLink
            to="/admin/houses"
            className="block px-4 py-2 text-blue hover:bg-textWhite"
            activeClassName="bg-gray-900"
          >
            <FaList className="inline-block mr-2" /> Houses
          </NavLink>
          <NavLink
            to="/admin/submissions"
            className="block px-4 py-2 text-blue hover:bg-textWhite"
            activeClassName="bg-gray-900"
          >
            <FaEnvelope className="inline-block mr-2" /> Submissions
          </NavLink>
        </nav>
      </aside>
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
          <div className="flex items-center">
            <FaBell className="text-gray-600 text-2xl mr-4" />
          </div>
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
