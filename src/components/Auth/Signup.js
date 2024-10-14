import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white p-7 rounded-3xl shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="username">Username</label>
                    <input
                        className="w-full border border-gray-300 p-2 rounded"
                        type="text"
                        id="username"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="email">Email</label>
                    <input
                        className="w-full border border-gray-300 p-2 rounded"
                        type="email"
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
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="confirm-password">Confirm Password</label>
                    <input
                        className="w-full border border-gray-300 p-2 rounded"
                        type="password"
                        id="confirm-password"
                        required
                    />
                </div>
                <div className="mb-4">
                    <Link to="/login" className="text-blue-500">Already have an account? Login</Link>
                </div>
                <button
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    type="submit"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;
