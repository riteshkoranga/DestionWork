import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white p-7 rounded-3xl shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="email">Email/Username</label>
                    <input
                        className="w-full border border-gray-300 p-2 rounded"
                        type="text"
                        id="email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="password">Password</label>
                    <input
                        className="w-full border border-gray-300 p-2 rounded"
                        type="password"
                        id="password"
                        required
                    />
                </div>
                <div className="flex justify-between mb-4">
                    <Link to="/forgot-password" className="text-blue-500">Forgot Password?</Link>
                    <Link to="/signup" className="text-blue-500">Sign Up</Link>
                </div>
                <button
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
