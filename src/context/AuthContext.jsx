import React, { createContext, useContext, useState } from 'react';
import Navbar from "../components/layout/Navbar.jsx";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const token = localStorage.getItem('teebayToken');
        return !!token;
    });

    const loginUser = (token) => {
        localStorage.setItem('teebayToken', token);
        setIsAuthenticated(true);
    };

    const logoutUser = () => {
        localStorage.removeItem('teebayToken');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, loginUser, logoutUser }}>
            {isAuthenticated ? <Navbar/> : ''}
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);