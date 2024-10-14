import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Dashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex bg-gray-100">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="flex-1 p-6">
               
                <main className="mt-4">
                    {/* Main content goes here */}
                    <h2 className="text-xl font-semibold">Welcome to the Dashboard</h2>
                    <p className="mt-2"></p>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
