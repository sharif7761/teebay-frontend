import './App.css'
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProductListPage from './pages/ProductListPage';

const App = () => {
    const isAuthenticated = !!localStorage.getItem('token');

    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
                path="/products"
                element={isAuthenticated ? <ProductListPage /> : <Navigate to="/login" />}
            />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
};

export default App;
