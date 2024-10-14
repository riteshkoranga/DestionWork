import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <nav className={`fixed h-screen inset-y-0 left-0 w-32 bg-white shadow-md transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
            <div className="p-4 flex justify-between items-center">
               
                {/* Close button */}
                <button 
                    onClick={toggleSidebar} 
                    className="md:hidden text-gray-600 focus:outline-none"
                >
                    &times; {/* This is the "X" character */}
                </button>
            </div>
            <ul className="mt-6">
                <li>
                    <Link to="/dashboard" className="block p-4 text-gray-700 hover:bg-gray-200">Dashboard</Link>
                </li>
                <li>
                    <Link to="/profile" className="block p-4 text-gray-700 hover:bg-gray-200">Profile</Link>
                </li>
                <li>
                    <Link to="/settings" className="block p-4 text-gray-700 hover:bg-gray-200">Settings</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
