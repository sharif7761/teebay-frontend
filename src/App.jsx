import './App.css'
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import RegistrationPage from "./pages/RegistrationPage";
import BoughtProductsPage from "./pages/BoughtProductsPage";

const App = () => {
    const isAuthenticated = !!localStorage.getItem('token');

    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route
                path="/products/:id"
                element={isAuthenticated ? <ProductDetailsPage /> : <Navigate to="/login" />}
            />
            <Route
                path="/products"
                element={isAuthenticated ? <ProductListPage /> : <Navigate to="/login" />}
            />
            <Route
                path="/bought-products"
                element={isAuthenticated ? <BoughtProductsPage /> : <Navigate to="/login" />}
            />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
};

export default App;
