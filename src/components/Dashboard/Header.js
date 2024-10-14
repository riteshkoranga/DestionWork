import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
    return (
        <header className="flex justify-between items-center mb-4 bg-white p-4 shadow-md">
            <div className="flex items-center">
                <button 
                    onClick={toggleSidebar} 
                    className="md:hidden p-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none mr-4"
                >
                    Toggle Menu
                </button>
                <h1 className="text-2xl font-bold mr-6">Assignment</h1>

                <a href='/'>Dashboard</a>
            </div>

            <div className="flex items-center space-x-4">
                <Link 
                    to="/login" 
                    className="text-gray-700 hover:text-blue-600"
                >
                    Login
                </Link>
                <Link 
                    to="/signup" 
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Sign Up
                </Link>
            </div>
        </header>
    );
};

export default Header;
