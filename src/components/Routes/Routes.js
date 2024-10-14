import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';

const Routes = () => {
    return (
        <Router>
            <Routes>
               
                <Route  path="/login" element={<Login/>} ></Route>
                <Route  path="/signup" element={<Signup/>} ></Route>
                <Route  path="/dashboard" element={<Dashboard/>} ></Route>
                <Route  path="/" element={<Dashboard/>} ></Route>{/* Default route to dashboard */}
               
            </Routes>
        </Router>
    );
};

export default Routes;
